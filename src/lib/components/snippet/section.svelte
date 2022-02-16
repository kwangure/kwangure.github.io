{#if $$slots.heading}
    <h2>
        <slot name="heading"></slot>
    </h2>
{:else}
    <div class="spacer"></div>
{/if}

<slot></slot>

<style>
    h2:before {
        content: counter(var(--h2-counter)) ".\0000a0";
        counter-increment: var(--h2-counter);
    }
    .spacer {
        margin-top: 24px;
    }
</style>