<script>
    import { mdiContentCopy, mdiOpenInNew } from "@mdi/js";
    import Button from "@kwangure/strawberry/components/Button";
    import Icon from "@kwangure/strawberry/components/Icon";
    import Input from "@kwangure/strawberry/components/Input";
    import Notification from "@kwangure/strawberry/components/Notification";
    import Tooltip from "@kwangure/strawberry/components/Tooltip";

    export let name;
    export let href;
    export let icon;

    let visible = false;
    let message = "";

    $: formattedHref = href.replace(/^(https?:\/\/)?(www\.)?/, "");

    async function copy() {
        try {
            await navigator.clipboard.writeText(href);
            message = `${name} link copied`;
        } catch (error) {
            message = "Copying failed";
        }
        visible = true;
    }
</script>

<Notification bind:visible {message}/>

<span class="link">
    <Tooltip gesture="click">
        <button class="target">
            <span class="icon">
                <Icon path={icon}/>
            </span>
            <span class="text">{name}</span>
        </button>
        <svelte:fragment slot="popup">
            <Input hideLabel readonly value={formattedHref}/>
            <div class="buttons">
                <Button icon={mdiContentCopy} iconProps={{size: "18px"}}
                    on:click={copy}>
                    Copy
                </Button>
                <Button icon={mdiOpenInNew} iconProps={{size: "18px"}}
                    on:click={() => window.open(href)}>
                    Open
                </Button>
            </div>
        </svelte:fragment>
    </Tooltip>
</span>

<style>
    .link,
    .target {
        display: flex;
        align-items: center;
    }
    .target {
        cursor: pointer;
        padding: 5px 8px;
        border-radius: var(--br-border-radius);
        transition: all 0.5s ease;
        border: none;
        background-color: transparent;
        font: inherit;
        color: var(--br-grey-dark);
    }
    .target:hover {
        color: var(--br-white);
        background-color: var(--br-grey-dark);
    }
    .text {
        display: none;
    }
    .link :global(.berry-tooltip) {
        padding: 10px;
    }
    .link :global(.berry-button) {
        color: white;
    }
    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        margin-top: 5px;
    }
    @media only screen and (min-width: 669px) {
        .text {
            display: inline;
        }
        .icon {
            display: none;
        }
    }
</style>