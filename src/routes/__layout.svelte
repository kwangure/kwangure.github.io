<script>
    import "@kwangure/strawberry/css/standardDOM";
    import { mdiBrightness2, mdiBrightness5, mdiMagnify } from "@mdi/js";
    import Icon from "@kwangure/strawberry/components/Icon";
    import Tooltip from "@kwangure/strawberry/components/Tooltip";

    let is_dark = false;
</script>

<div class="layout" class:is_dark>
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
                    <button on:click={() => is_dark = !is_dark}>
                        <Icon path={is_dark ? mdiBrightness2 : mdiBrightness5}/>
                    </button>
                    <svelte:fragment slot="popup">
                        {is_dark ? "Switch to light theme" : "Swtich to dark theme"}
                    </svelte:fragment>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-actions">
                <div class="action active">
                    <div>
                        <Icon path={mdiMagnify}/>Lookup
                    </div>
                    <!--::after -->
                </div>
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
        --goog-red: #dd5546;
        --goog-blue: #4f88e3;
        --goog-green: #279a48;
        --goog-yellow: #e4ac04;

        --goog-white: #fff;
        --goog-grey-100: #ebebeb;
        --goog-grey-200: #bdc1c6;
        --goog-grey-300: #70757a;
        --goog-grey-400: #5f6368;
        --goog-grey-500: #3c4043;
        --goog-grey-900: #202124;
        --goog-black: #000;

        /* ------ Layout Vars ------*/
        --font-color: var(--goog-grey-900);
        --border-color: var(--goog-grey-100);
        --background-color: var(--goog-white);
        --icon-color: var(--goog-grey-400);
    }
    .layout.is_dark {
        /* ------ Google Vars ------ */
        --goog-blue: #8ab4f8;

        /* ------ Layout Vars ------*/
        --font-color: var(--goog-grey-200);
        --border-color: var(--goog-grey-500);
        --background-color: var(--goog-grey-900);
        --icon-color: var(--goog-grey-100);
    }
    .layout {
        color: var(--font-color);
        background-color: var(--background-color);
    }
    /* ------ Strawberry CSS Overrides ------ */
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
    .layout :global(a) {
        color: var(--goog-blue);
    }
    /* ------ App ------ */
    .layout {
        height: 100%;
        font-family: "Inter", var(--br-font-family);
        display: grid;
        grid-template-rows: max-content 1fr;
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
    .bottom-actions > div {
        display: flex;
        align-items: center;
        padding: 18px 12px 0;
    }
    .bottom-actions > div.active {
        color: var(--goog-blue);
        display: flex;
        flex-direction: column;
    }
    .bottom-actions > div.active::after {
        content: " ";
        display: block;
        width: 115%;
        height: 3px;
        background-color: var(--goog-blue);
        margin-top: 10px;
    }
    .bottom-actions > div.active div {
        display: flex;
        align-items: center;
    }
    .logo {
        display: flex;
        font-size: 26px;
        font-family: 'Product Sans';
        font-weight: 500;
        padding-inline: 26px;
    }
    .logo span:nth-child(1) {
        color: var(--goog-blue);
    }
    .logo span:nth-child(2) {
        color: var(--goog-red);
    }
    .logo span:nth-child(3) {
        color: var(--goog-yellow);
    }
    .logo span:nth-child(4) {
        color: var(--goog-green);
    }
    .logo span:nth-child(5) {
        color: var(--goog-blue);
    }
    .logo span:nth-child(6) {
        color: var(--goog-yellow);
    }
    .logo span:nth-child(7) {
        color: var(--goog-red);
    }
    .logo span:nth-child(8) {
        color: var(--goog-blue);
    }
    .is_dark .logo span {
        color: var(--goog-grey-100);
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
        background: rgba(0, 0, 0, 0.1);
    }
    .is_dark button:hover {
        background: rgba(232, 234, 237, 0.1);
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