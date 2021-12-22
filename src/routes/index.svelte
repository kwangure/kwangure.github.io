<script>
    import Icon from "@kwangure/strawberry/components/Icon";
    import { mdiLock } from "@mdi/js";
    import Title from "$lib/components/title.svelte";
    import Tooltip from "@kwangure/strawberry/components/Tooltip";

</script>

<div class="about-bar">
    About 1 result (<Tooltip>
        <Icon path={mdiLock}/>
        <svelte:fragment slot="popup">
            Ask me when we meet
        </svelte:fragment>
    </Tooltip> years old)
</div>
<Title/>
<div class="definition">
    <div class="word-type">
        software engineer
    </div>
    <div class="accounts">
        <div class="account">github</div>
        <a href="http://github.com/kwangure">kwangure</a>
        <div class="account">linkedin</div>
        <a href="http://linkedin.com/in/kwangure">kwangure</a>
        <div class="account">twitter</div>
        <a href="http://twitter/kwangure">kwangure</a>
    </div>
    <div class="details">
        a human that builds modern, resilient, and inclusive software for the
        web, with a strong focus on performance, responsive design, and accessibility.
        <div class="example">
            "no one cares about user experience like Kafungo Wangure"
        </div>
        <div class="similar">
            <span>Vaguely similar:</span>
            <Tooltip>
                <div class="pill">Margaret Hamilton</div>
                <svelte:fragment slot="popup">
                    Kafungo loves his bits and bytes.
                </svelte:fragment>
            </Tooltip>
            <Tooltip>
                <div class="pill">Barack Obama</div>
                <svelte:fragment slot="popup">
                    Kafungo is pragmatic but in a cool way.
                </svelte:fragment>
            </Tooltip>
            <Tooltip>
                <div class="pill">Beyoncé</div>
                <svelte:fragment slot="popup">
                    Kafungo can't sing to save his life, but he aspires to be awesome.
                </svelte:fragment>
            </Tooltip>
        </div>
    </div>
</div>

<style>
    .about-bar {
        height: 42px;
        color: #70757a;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    .about-bar :global(.berry-icon) {
        --br-icon-size: 16px;
        color: var(--br-blue);
        margin-right: 2px;
    }
    .definition {
        margin-top: 10px;
    }
    .word-type {
        color: var(--goog-grey);
        font-style: italic;
    }
    .accounts {
        display: flex;
    }
    .account {
        color: var(--goog-grey);
        margin-right: 3px;
    }
    .account:after {
        content: ":";
    }
    a + .account:before {
        content: "; ";
    }
    .details {
        margin-top: 4px;;
        padding-left: 20px;
    }
    .example {
        color: var(--goog-grey);
    }
    .similar {
        display: flex;
        align-items: center;
        margin-top: 4px;
    }
    .similar span {
        margin-top: 6px;
        margin-right: 6px;
        color: var(--goog-grey);
    }
    .pill {
        cursor: pointer;
        padding-inline: 12px;
        margin-top: 6px;
        margin-right: 4px;;
        border: var(--br-border);
        border-radius: 20px;
    }
    .pill:hover {
        background-color: var(--br-grey-light);
    }
</style>