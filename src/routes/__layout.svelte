<script>
    import "@kwangure/strawberry/css/standardDOM";
    import { mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
    import AccountLink from "./_account_link.svelte";
</script>

<nav>
    <div class="nav-wrapper ">
        <div class="nav-links">
            <a class="logo" href="/">
                kwangure.github.io
            </a>
            <ul class="accounts">
                <li>
                    <AccountLink name="GitHub"
                        href="https://github.com/kwangure"
                        icon={mdiGithub}/>
                </li>
                <li>
                    <AccountLink name="LinkedIn"
                        href="https://linkedin.com/in/kwangure"
                        icon={mdiLinkedin}/>
                </li>
                <li>
                    <AccountLink name="Twitter"
                        href="https://twitter.com/kwangure"
                        icon={mdiTwitter}/>
                </li>
            </ul>
        </div>
        <ul class="calls-to-action">
            <li>
                <a href="articles">Articles</a>
            </li>
            <li>
                <a href="projects">Projects</a>
            </li>
        </ul>
    </div>
</nav>
<main>
    <slot/>
</main>

<style>
    :global(html) {
        font-size: 100%;
    }
    :global(body) {
        font-size: 1rem;
        font-family: 'Inter', var(--br-font);
        display: grid;
        grid-template-rows: max-content 1fr;
    }
    nav,
    .nav-wrapper,
    .nav-links,
    li a {
        display: flex;
        align-items: center;
    }
    nav, main {
        --nav-height: 75px;
        --nav-padding-top: 0px;
    }
    nav, main {
        max-width: 65rem;
        width: 92%;
        margin-left: auto;
        margin-right: auto;
    }
    nav {
        height: var(--nav-height);
    }
    .nav-wrapper {
        width: 100%;
        justify-content: space-between;
    }
    .accounts {
        display: none;
    }
    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        color: var(--br-grey-dark);
        font-size: 0.875rem;
    }
    li a {
        padding: 5px 8px;
        border-radius: var(--br-border-radius);
        transition: all 0.5s ease;
    }
    li a:hover {
        color: var(--br-white);
        background-color: var(--br-grey-dark);
    }
    a.logo {
        margin-right: 1rem;
        font-weight: 600;
    }
    ul {
        display: flex;
        gap: 0.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    main {
        height: calc(100vh - var(--nav-height) - var(--nav-padding-top));
    }
    @media only screen and (min-width: 500px) {
        .accounts {
            display: flex;
        }
        a {
            font-size: 1rem;
        }
    }
    @media only screen and (min-width: 669px) {
        nav {
            --padding-top: .5rem;
        }
        .nav-wrapper {
            padding-top: 1.5rem;
        }
        ul {
            gap: 1.5rem;
        }
        a.logo {
            margin-right: 2.25rem;
        }
    }
</style>