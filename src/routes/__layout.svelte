<script>
    // @ts-ignore
    import Theme from "@kwangure/strawberry/css/Theme";
    import { mdiBookOutline, mdiBrightness2, mdiBrightness5, mdiMagnify } from "@mdi/js";
    import Icon from "@kwangure/strawberry/components/Icon";
    import NavLink from "$lib/components/nav_link.svelte";
    import { page } from '$app/stores';
    import Tooltip from "@kwangure/strawberry/components/Tooltip";

    $: ({ url: { pathname }} = $page);

    let mode = "light";

    function toggle() {
        mode = mode === "dark" ? "light": "dark";
    }
</script>

<Theme mode={mode}/>

<div class="layout">
    <nav>
        <div class="top">
            <a class="logo" href="/">
                <span>K</span>
                <span>w</span>
                <span>a</span>
                <span>n</span>
                <span>g</span>
                <span>u</span>
                <span>r</span>
                <span>e</span>
            </a>
            <div class="top-actions">
                <Tooltip>
                    <button on:click={toggle}>
                        <Icon path={mode === "dark" ? mdiBrightness2 : mdiBrightness5}/>
                    </button>
                    <svelte:fragment slot="popup">
                        {mode === "dark" ? "Switch to light theme" : "Swtich to dark theme"}
                    </svelte:fragment>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-actions">
                <NavLink href="/" icon={mdiMagnify} active={pathname === "/"}>
                    Lookup
                </NavLink>
                <NavLink href="/snippets" icon={mdiBookOutline} active={pathname.startsWith("/snippets")}>
                    Snippets
                </NavLink>
            </div>
        </div>
    </nav>
    <main>
        <slot />
    </main>
</div>

<style>
    /* latin */
    @font-face {
        font-family: 'Product Sans';
        font-style: normal;
        font-weight: 500;
        src: local('Product Sans Medium'), local('ProductSans-Medium'), url(https://fonts.gstatic.com/s/productsans/v9/pxicypQkot1TnFhsFMOfGShd5PSbT2lB.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    .layout {
        /* ------ Google Vars ------ */
        --goog-blue-100: #e8f0fe;
        --goog-blue-200: #d2e3fc;
        --goog-blue-300: #8ab4f8;
        --goog-blue-500: #4f88e3;
        --goog-blue-700: #1a0dab;

        --goog-white: #fff;
        --goog-grey-100: #f8f9fa;
        --goog-grey-200: #dadce0;
        --goog-grey-300: #bdc1c6;
        --goog-grey-400: #9aa0a6;
        --goog-grey-500: #70757a;
        --goog-grey-600: #5f6368;
        --goog-grey-700: #3c4043;
        --goog-grey-800: #303134;
        --goog-grey-900: #202124;
        --goog-black: #000;

        --goog-red: #dd5546;
        --goog-green: #279a48;
        --goog-yellow: #e4ac04;
    }

    :theme(berry, light) {
        --goog-blue: var(--goog-blue-500);

        --font-color: var(--goog-grey-900);
        --font-color-secondary: var(--goog-grey-500);
        --link-font-color: var(--goog-blue-700);
        --border-color: var(--goog-grey-200);
        --background-color: var(--goog-white);
        --background-color-hover: var(--goog-grey-100);
        --icon-color: var(--goog-grey-600);
        --button-hover: var(--background-color-hover);
    }
    :theme(berry, dark) {
        --goog-blue: var(--goog-blue-300);

        --font-color: var(--goog-grey-300);
        --font-color-secondary: var(--goog-grey-400);
        --link-font-color: var(--goog-blue-700);
        --border-color: var(--goog-grey-700);
        --background-color: var(--goog-grey-900);
        --background-color-hover: var(--goog-grey-800);
        --icon-color: var(--goog-grey-200);
        --logo-color: var(--goog-grey-200);
        --button-hover: rgba(232, 234, 237, 0.1);
    }
    .layout {
        color: var(--font-color);
        background-color: var(--background-color);
    }
    /* ------ Strawberry CSS Overrides ------ */
    .layout {
        --br-heading-color: var(--font-color);
    }
    .layout :global(.berry-tooltip) {
        --br-black-transparent: rgba(60, 64, 67, 0.9);
        padding: 5px 6px;
        min-height: 0;
        line-height: 16px;
        box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%),
            0px 3px 1px -2px rgb(0 0 0 / 12%),
            0px 1px 5px 0px rgb(0 0 0 / 20%);
        transition-delay: 0.25s;
    }
    .layout :global(.berry-tooltip .arrow) {
        display: none;
    }
    :global(a) {
        color: var(--link-font-color);
    }
    /* ------ App ------ */
    .layout {
        height: 100%;
        font-family: "Inter", var(--br-font-family);
        display: grid;
        grid-template-rows: max-content 1fr;
        overflow-y: scroll;
    }
    .top, .bottom {
        display: flex;
        align-items: center;
    }
    .top {
        margin-top: 28px;
    }
    .bottom {
        border-bottom: 1px solid var(--border-color);
    }
    .bottom-actions {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-left: 170px;
    }
    .logo {
        display: flex;
        font-size: 26px;
        font-family: 'Product Sans';
        font-weight: 500;
        padding-inline: 26px;
    }
    .logo span:nth-child(1) {
        color: var(--logo-color, var(--goog-blue));
    }
    .logo span:nth-child(2) {
        color: var(--logo-color, var(--goog-red));
    }
    .logo span:nth-child(3) {
        color: var(--logo-color, var(--goog-yellow));
    }
    .logo span:nth-child(4) {
        color: var(--logo-color, var(--goog-green));
    }
    .logo span:nth-child(5) {
        color: var(--logo-color, var(--goog-blue));
    }
    .logo span:nth-child(6) {
        color: var(--logo-color, var(--goog-yellow));
    }
    .logo span:nth-child(7) {
        color: var(--logo-color, var(--goog-red));
    }
    .logo span:nth-child(8) {
        color: var(--logo-color, var(--goog-blue));
    }
    .top-actions {
        margin-inline: auto 30px;
    }
    button {
        background-color: transparent;
        border-radius: 50%;
        border: none;
        color: var(--icon-color);
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--br-transition-duration) ease;
    }
    button:hover {
        background: var(--button-hover);
    }
    button :global(.berry-icon) {
        --br-icon-size: 22px;
    }
    main {
        max-width: 700px;
        width: 92%;
        margin-left: 180px;
        margin-right: auto;
    }
</style>
