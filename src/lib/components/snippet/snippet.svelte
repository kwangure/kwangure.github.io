<script>
    let heading;

    $: title = heading?.textContent;
</script>

<svelte:head>
    {#if title}
        <title>{title}</title>
    {/if}
</svelte:head>

<article>
    <h1 bind:this={heading}>
        <!-- The H1 Heading that people will see as the topic/subject of your snippet-->
        <slot name="heading"></slot>
    </h1>
    {#if $$slots.subheading}
        <h2>
            <!--
                The H2 Heading that is less clickbait-y toned down version of the `heading`
                that cues the reader for what to expect
            -->
            <slot name="subheading"></slot>
        </h2>
    {/if}
    <slot></slot>
</article>

<style>
    article {
        --h2-counter: h2-counter;
        counter-reset: var(--h1-counter);
    }
    h1 {
        counter-reset: var(--h2-counter);
    }
    h2 {
        color: #999;
        font-size: 20px;
    }
    article :global(p) {
        line-height: 2;
        margin-block: 10px;
        font-size: 16px;
    }
</style>