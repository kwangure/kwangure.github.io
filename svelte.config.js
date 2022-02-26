import adapter from "@sveltejs/adapter-static";
import { fileURLToPath } from "url";
import inspect from "vite-plugin-inspect";
import path from "path";
import { strawberry } from "@kwangure/strawberry/build/vite-plugin-strawberry";
import { strawberryMarkdown } from "./scripts/vite-plugin-berry-markdown.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolve(pathname) {
    return path.resolve(__dirname, pathname);
}

/** @type {import("@sveltejs/kit").Config} */
export default {
    extensions: [".md", ".svelte"],
    kit: {
        adapter: adapter(),
        target: "body",
        vite: {
            plugins: [
                inspect(),
                strawberry(),
                strawberryMarkdown(),
            ],
            optimizeDeps: {
                include: ["highlight.js/lib/core"],
            },
        },
    },
};
