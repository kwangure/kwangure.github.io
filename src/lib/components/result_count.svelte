<script>
    export let count;
</script>

<div class="about-bar">
    About {count} result{count === 1 ? "": "s"} (<slot/>)
</div>

<style>
    .about-bar {
        height: 42px;
        color: var(--font-color-secondary);
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
</style>