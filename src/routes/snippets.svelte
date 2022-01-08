<script>
    import { page } from "$app/stores";
    import ResultCount from "$lib/components/result_count.svelte";

    $: ({ url } = $page);
    $: ({ origin, pathname } = url);
    $: console.log({ url });

    const snippets = [
        {
            title: "01. How to export a CSS API from a Svelte component",
            url: "how-export-css-api-from-svelte-component",
            excerpt: `With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes ... to provide a CSS API for consumers of your
components or design system.`,
            subtitles: [
                {
                    subtitle: "Structuring the API",
                    id: "",
                },
                {
                    subtitle: "Using the API",
                    id: "",
                }
            ],
        },
    ];
</script>

<ResultCount count={snippets.length}>
    0.01seconds
</ResultCount>
{#each snippets as { excerpt, subtitles, title, url }}
    <div class="snippet">
        <div class="breadcrumbs">
            <span class="origin">{origin}</span>
            <span class="path">{pathname.split("/").join(" › ")}</span>
        </div>
        <a class="title" href="snippets/{url}">{title}</a>
        <div class="excerpt">
            {@html excerpt}
        </div>
        <div class="subtitles">
            {#each subtitles as {id, subtitle}, i}
                <a href="snippets/{url}/#{id}" class="subtitle">{subtitle}</a>
                {#if i !== subtitles.length-1}<span>•</span>{/if}
            {/each}
        </div>
    </div>
{/each}

<style>
    .snippet {
        margin-bottom: 24px;;
    }
    .breadcrumbs {
        padding-block: 2px;
    }
    .path {
        color: var(--font-color-secondary);
    }
    .title {
        line-height: 1.5;
        font-size: 20px;
        margin-block: 5px;
    }
    .excerpt {
        color: var(--font-color-secondary);
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
    }
    .subtitles {
        display: flex;
        gap: 5px;
        line-height: 2;
    }
</style>