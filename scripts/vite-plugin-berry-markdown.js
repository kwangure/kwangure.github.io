import { all, toHast } from "mdast-util-to-hast";
import { SKIP, visit } from "unist-util-visit";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";
import { fromMarkdown } from "mdast-util-from-markdown";
import fs from "fs";
import { raw } from "hast-util-raw";
import { toHtml } from "hast-util-to-html";

const isStrawberryMarkdown = (id) => id.endsWith(".md");
const BACKTICK_PLACEHOLDER = "@_@;";
const INLINE_SEPARATOR = "!#";
const replaceMap = new Map([
    ["&#x22;", "\""],
    ["&#x26;", "&"],
    ["&#x27;", "'"],
    // Escape back ticks contained in string literals
    ["&#x60;", "\\`"],
]);
// Restore commented out code e.g quotes etc.
const astToHtml = (ast) => toHtml(ast, { allowDangerousHtml: true })
    .replace(/&#x.*?;/g, (code) => replaceMap.get(code) || code)
    .replaceAll(BACKTICK_PLACEHOLDER, "`");

export function strawberryMarkdown() {
    return {
        name: "strawberry-markdown",
        enforce: "pre",
        load(id) {
            if (!isStrawberryMarkdown(id)) return;
            return fs.readFileSync(id, { encoding: "utf-8" });
        },
        transform(code, id) {
            if (!isStrawberryMarkdown(id)) return;

            const supportedLanguages = new Set(["js", "css", "svelte"]);
            const embeddedLanguages = new Set();
            const MdAst = fromMarkdown(code, {
                allowDangerousHtml: true,
                extensions: [directive()],
                mdastExtensions: [directiveFromMarkdown],
            });
            const htmlAst = toHast(MdAst, {
                allowDangerousHtml: true,
                handlers: {
                    code(h, node) {
                        const value = node.value ? `${node.value}\n` : "";
                        const lang = supportedLanguages.has(node.lang) ? node.lang : "none";
                        const properties = {
                            language: `{${lang}}`,
                            code: `{${BACKTICK_PLACEHOLDER}${value}${BACKTICK_PLACEHOLDER}}`,
                        };
                        embeddedLanguages.add(lang);
                        return h(node, "Code", properties);
                    },
                    inlineCode(h, node) {
                        const value = node.value.replace(/\r?\n|\r/g, " ");
                        let [lang, code] = value.split(INLINE_SEPARATOR);
                        if (!code) {
                            code = lang;
                            lang = "none";
                        }
                        const properties = {
                            language: `{${lang}}`,
                            inline: true,
                            code: `{${BACKTICK_PLACEHOLDER}${code}${BACKTICK_PLACEHOLDER}}`,
                        };
                        embeddedLanguages.add(lang);
                        return h(node, "Code", properties);
                    },
                },
                unknownHandler(h, node) {
                    if (
                        node.type === "textDirective"
                        || node.type === "leafDirective"
                        || node.type === "containerDirective"
                    ) {
                        if (node.name === "title" || node.name === "description") {
                            const newNode = {
                                type: "element",
                                tagName: "svelte:fragment",
                                properties: {
                                    slot: node.name === "title"
                                        ? "heading"
                                        : "subheading",
                                },
                                children: all(h, node),
                            };
                            return newNode;
                        }
                    }
                },
            });
            // Prevents from lowercasing our Svelte components.
            const rawAst = raw(htmlAst, { passThrough: ["element"]});

            visit(rawAst, (node, index, parent) => {
                if (node.tagName === "script" && node.properties.context !== "module") {
                    const [scriptText] = node.children;
                    const imports = [
                        "import Snippet from \"$lib/components/snippet/snippet.svelte\";",
                        "import Section from \"$lib/components/snippet/section.svelte\";",
                    ];
                    if (embeddedLanguages.size !== 0) {
                        const languages = Array.from(embeddedLanguages).join(", ");
                        imports.push(`import Code, { ${languages} } from "@kwangure/strawberry/components/Code";`);
                    }
                    scriptText.value += imports.join("\n");
                    // Wrap all children except script in 'Snippet' component
                    parent.children.splice(index, 1);
                    const snippetComponent = {
                        type: "element",
                        tagName: "Snippet",
                        children: parent.children,
                    };
                    const snippetIndex = 1;
                    parent.children = [node, snippetComponent];
                    return [SKIP, snippetIndex];
                }
            });

            return astToHtml(rawAst);
        },
    };
}
