<script>
    import Code, { css, svelte } from "@kwangure/strawberry/components/Code";
    import File from "$lib/components/file.svelte";
</script>

<svelte:head>
    <!-- Squeeze the SEO out of those keywords! -->
    <title>Don't use :global in Svelte components, do this instead.</title>
</svelte:head>

<h1>How to provide a CSS API from your component</h1>

<p>
    With today's Svelte there's no standard way of telling component consumers
    what styles they're allowed to override. You should ideally communicate, what is
    part of your styling API, and what is internal styling. This post
    proposes <i>one way</i> (the best way 😊) to provide a CSS API for consumers of your
    components or design system.
</p>
<p>
    For one...you should not be using the <Code inline language={css} code={":global"}/>
    selector most of the time (read <i>ever</i>).
</p>

<h2>Structuring the API </h2>
<p>
    Use valueless CSS custom properties via <Code inline language={css} code={"var()"}/>
    with your default/intended styles as fallback.
</p>
<File language={svelte} code={
`<button>
    <slot/>
</button>
<style\>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>`}>
    <svelte:fragment slot="filename">Button.svelte</svelte:fragment>
</File>
<p>
    The message to consumers of you component should be, "Any selector or
    DOM element you target could change at any time. Only override styles using
    <Code inline language={css} code={"--button-color"}/> and
    <Code inline language={css} code={"--button-width"}/>".
</p>
<p>
    Using <i>virgin</i>👀 custom properties also avoids
    <Code inline language={css} code={"!important"}/> and
    <Code inline language={css} code={".repeat.repeat.repeat"}/> fights for CSS
    specificity.
</p>

<h2>Using the API</h2>
<p>
    Generally, you should override the styles of child components using custom properties
    in the <Code inline language={svelte} code={"<style/>"}/> tag. For one off uses
    you may pass a custom property attribute, but this has the disadvantage that Svelte
    inserts a wrapper <Code inline language={svelte} code={"<div/>"}/> into your code
    and will lead to repetition if you are overriding the same style on multiple components.
</p>
<File language={svelte} code={
`<script\>
    import Button from"./Button.svelte";
</script>
<div class="parent">
    <Button --button-color="blue">Click me!</Button>
    <Button>Click me!</Button>
</div>

<style\>
    .parent {
        --button-width: 100px;
    }
\</style>`}>
    <svelte:fragment slot="filename">Parent.svelte</svelte:fragment>
</File>
