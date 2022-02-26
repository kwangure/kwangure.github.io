<script>
    import File from "$lib/components/file.svelte";
</script>

::title[The `css!#:global` CSS selector considered harmful]
:::description
This snippet guides you on how to provide a CSS API to component consumers
using custom properties/CSS Variables. Essentially, don't use `css!#:global`
in Svelte components, do this instead.
:::

With today's Svelte there's no standard way of telling component consumers
what styles they're allowed to override. You should ideally communicate, what is
part of your styling API, and what is internal styling. This post
proposes *one way* (the best way 😊) to provide a CSS API for consumers of your
components or design system.

For one...you should not be using the `css!#:global`
selector most of the time (read *ever*).

## Structuring the API

Use valueless CSS custom properties via `css!#var()` with your default/intended styles as fallback.

```svelte
<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, red);
        width: var(--button-width, 50px);
    }
</style>
```

The message to consumers of you component should be, "Any selector or
DOM element you target could change at any time. Only override styles using
`css!#--button-color` or `--button-width`.

Using *virgin*👀 custom properties also avoids `css!#!important` and
`css!#.repeat.repeat.repeat` fights for CSS specificity.

## Using the API
Generally, you should override the styles of child components using custom properties
in the `svelte!#style` tag. For one off uses you may pass a custom property
attribute, but this has the disadvantage that Svelte inserts a wrapper `svelte!#div`
into your code and will lead to repetition if you are overriding the same style on multiple
components.

```svelte
<script>
    import Button from "./Button.svelte";
</script>
<div class="parent">
    <Button --button-color="blue">Click me!</Button>
    <Button>Click me!</Button>
</div>

<style>
    .parent {
        --button-width: 100px;
    }
</style>
```
