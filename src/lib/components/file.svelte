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
    :theme(berry, dark) {
        --tab-background-color: #1e1e1e;
        --menu-background-color: var(--br-grey-dark);
    }
    :theme(berry, light) {
        --tab-background-color: var(--br-grey-lightest);
        --menu-background-color: var(--br-grey-light);
    }
    .tab-bar {
        background-color: var(--menu-background-color);
        border-top-left-radius: var(--br-border-radius);
        border-top-right-radius: var(--br-border-radius);
        display: flex;
    }
    .tab {
        padding: 8px 16px;
        font-size: 14px;
        background-color: var(--tab-background-color);
        border-top-left-radius: var(--br-border-radius);
        border-top-right-radius: var(--br-border-radius);
    }
</style>