<script>
    import Code from "@kwangure/strawberry/components/Code";

    export let language;
    export let code;
</script>

<div class="frame">
    <div class="tab-bar">
        <div class="tab">
            <slot name="filename"></slot>
        </div>
    </div>
    <Code {language} {code}/>
</div>

<style>
    .tab-bar {
        background-color: var(--br-grey-light);
        border-top-left-radius: var(--br-border-radius);
        border-top-right-radius: var(--br-border-radius);
        display: flex;
    }
    .tab {
        padding: 8px 16px;
        font-size: 14px;
        background-color: var(--br-grey-lightest);
        border-top-left-radius: var(--br-border-radius);
        border-top-right-radius: var(--br-border-radius);
    }
</style>