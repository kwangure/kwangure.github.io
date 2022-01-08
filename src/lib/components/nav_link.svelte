<script>
    import Icon from "@kwangure/strawberry/components/Icon";

    export let href;
    export let icon;
    export let active;
</script>

<a class="action" class:active {href}>
    <div class="action-text">
        <Icon path={icon}/><slot/>
    </div>
    <!--::after -->
</a>

<style>
    a {
        display: flex;
        align-items: center;
        padding: 18px 12px 0;
        flex-direction: column;
        color: var(--font-color-secondary);
        transition: color var(--br-transition-duration) ease;
    }
    .active {
        color: var(--goog-blue);
    }
    a::after {
        content: " ";
        display: block;
        width: 115%;
        height: 3.5px;
        margin: 10px 0 -1px;
        transition: background-color var(--br-transition-duration) ease;
    }
    .active::after {
        background-color: var(--goog-blue);
    }
    .action-text {
        display: flex;
        align-items: center;
    }
</style>