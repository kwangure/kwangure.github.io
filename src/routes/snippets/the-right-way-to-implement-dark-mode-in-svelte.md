<script>
    import File from "$lib/components/file.svelte";
</script>

::title[The right way to implement dark mode in Svelte]
:::description
This is a general outline on how to add themes and color-schemes to your
Sveltekit setup using custom-properties/CSS variables and prefers-color-scheme.
:::

## Styling Svelte components based on system preferences

This post assumes you already
[use custom properties to style your Svelte components](/snippets/how-export-css-api-from-svelte-component)
as guided by the prior snippet in this series. Using custom properties, you should separate the
color values of our component using <css>prefers-color-scheme</css>.

Your component should look something like this:

```svelte
<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, --default-button-color);
    }
    @media (prefers-color-scheme: dark) {
        button {
            --default-button-color: pink;
        }
    }
    @media (prefers-color-scheme: light) {
        button {
            --default-button-color: red;
        }
    }
</style>
```

With your styles separated into dark and light media queries, your components will be themed
based on the dark/light mode system preference of the OS. For some sites, that may be good
enough, but what if you want to allow users to theme your site different from the OS preference?

## Style Svelte components based on user preference.

To preserve user preference, use JavaScript to store preference in <js>localStorage</js>. In your
page component, such as a [`__layout.svelte` in Sveltekit](https://kit.svelte.dev/docs/layouts),

```svelte
<script>
    import { onMount } from "svelte";

    const storageKey = "user-theme";

    let preference;
    // Persist user preference
    $: preference && localStorage.setItem(storageKey, JSON.stringify(preference));

    function toggle() {
        preference = preference === 'light'
            ? 'dark'
            : 'light'
    }

    // localStorage and window is only available in the browser
    onMount(() => {
        preference = JSON.parse(localStorage.getItem(storageKey));
        if (!preference) {
            preference = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        }

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches: isDark }) => {
                preference = isDark ? 'dark' : 'light'
            })
    });
</script>

<div class="layout" data-theme={preference}>
    <button on:click={toggle} aria-label={preference}>
        Switch to {theme.value === 'light': 'dark' : 'light'}
    </button>
    <!--- Your app -->
    <slot></slot>
</div>
```

Then styling your components based on user preference will look something like this:

```svelte
<button>
    <slot></slot>
</button>
<style>
    button {
        color: var(--button-color, --default-button-color);
    }
    :global([data-theme=dark]) button {
        --default-button-color: pink;
    }
    :global([data-theme=dark]) button {
        --default-button-color: red;
    }
</style>
```

