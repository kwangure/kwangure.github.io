<script>
    import "@kwangure/strawberry/css/standardDOM";
    import { mdiGithub, mdiLinkedin } from "@mdi/js";
    import AccountLink from "./_account_link.svelte";
    import Navbar from "@kwangure/strawberry/components/Navbar";
</script>

<Navbar>
    <svelte:fragment slot="logo">
        kwangure.github.io
    </svelte:fragment>
    <svelte:fragment slot="nav-links">
        <AccountLink name="GitHub"
            href="https://github.com/kwangure"
            icon={mdiGithub}/>
        <AccountLink name="LinkedIn"
            href="https://linkedin.com/in/kwangure"
            icon={mdiLinkedin}/>
    </svelte:fragment>
</Navbar>
<main>
    <slot/>
</main>

<style>
    :global(body) {
        font-family: 'Inter', var(--br-font-family);
        display: grid;
        grid-template-rows: max-content 1fr;
    }
    :global(body) :global(.berry-navbar.berry-navbar) {
        --br-nav-max-width: 57rem;
        --br-nav-width: 92%;
        --br-nav-block-padding: 0px;
    }
    main {
        max-width: 56rem;
        width: 92%;
        margin-left: auto;
        margin-right: auto;
    }
</style>