<script>
    import { mdiVolumeHigh, mdiVolumeLow, mdiVolumeMedium } from "@mdi/js";
    import { onMount } from "svelte";

    let is_playing = false;
    let audio;

    function play() {
        if (is_playing) return;
        audio.play();
    }

    onMount(() => {
        audio = new Audio("/kafungo-wangure.mp3");
        audio.onplay = () => is_playing = true;
        audio.onended = () => is_playing = false;
    });

    const svg = (path, translate_x) => `url("data:image/svg+xml,<svg height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='%231973e8'><path d='${path}' style='transform: translateX(${translate_x})'/></svg>")`;
</script>

<div class="title">
    <div class="audio-wrapper" class:is_playing on:click={play}>
        <div class="audio high medium low"
        style="--volume-high:{svg(mdiVolumeHigh, "0px")};--volume-medium:{svg(mdiVolumeMedium, "-2px")};--volume-low:{svg(mdiVolumeLow, "-4px")};"/>
    </div>
    <div class="word">
        <div class="name">Kafungo Wangure</div>
        <div class="pronunciation">/kɑːfʊŋɡəʊ wʌːŋɡurɛ/</div>
        <div class="pronounce">
            <div class="image">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPGRlZnM+CiAgICA8cG9seWdvbiBpZD0ic21hbGwtdmlzZW1lLXYzLWEiIHBvaW50cz0iMCAwIDMyIDAgMzIgMzIgMCAzMiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPG1hc2sgaWQ9InNtYWxsLXZpc2VtZS12My1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjc21hbGwtdmlzZW1lLXYzLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzQyODVGNCIgeGxpbms6aHJlZj0iI3NtYWxsLXZpc2VtZS12My1hIi8+CiAgICA8cGF0aCBmaWxsPSIjRDJFM0ZDIiBkPSJNMCwxNS4yMzk3OTYzIEMyLjU0Mzg1NzE0LDE4Ljg3MDUyMDMgNS42NTIsMjIuMDgyMTk0NiA5LjIwMjI4NTcxLDI0Ljc0NDg3NjkgQzEzLjIxMTU3MTQsMjcuNzUxNzA3NyAxOC43ODg0Mjg2LDI3Ljc1MTcwNzcgMjIuNzk3NzE0MywyNC43NDQ4NzY5IEMyNi4zNDgsMjIuMDgyMTk0NiAyOS40NTYxNDI5LDE4Ljg3MDUyMDMgMzIsMTUuMjM5Nzk2MyBMMzIsLTcgTDAsLTcgTDAsMTUuMjM5Nzk2MyBaIiBtYXNrPSJ1cmwoI3NtYWxsLXZpc2VtZS12My1iKSIvPgogICAgPHBhdGggZmlsbD0iIzQyODVGNCIgZmlsbC1vcGFjaXR5PSIuNiIgZD0iTTE2LDIxLjIzMDY0OTIgQzE2LjkyNjA5OTEsMjEuMjMwNjQ5MiAxNy43OTEyNDY3LDIxLjQ5NDMxNTcgMTguNTI3MjEzNSwyMS45NTE1MDE5IEMxOC44MTA0NDEsMjIuMTI3MzMwOSAxOS4xMzYyNzM4LDIxLjc4ODc0ODUgMTguOTQwMzc5OSwyMS41MTY0Njc0IEMxOC4yNzg1NTU2LDIwLjU5NzMyNjMgMTcuMjA4MTEzNiwyMCAxNiwyMCBDMTQuNzkxODg2NCwyMCAxMy43MjE0NDQ0LDIwLjU5NzMyNjMgMTMuMDU5NjIwMSwyMS41MTY0Njc0IEMxMi44NjM3MjYyLDIxLjc4ODc0ODUgMTMuMTg5NTU5LDIyLjEyNzMzMDkgMTMuNDcyNzg2NSwyMS45NTE1MDE5IEMxNC4yMDg3NTMzLDIxLjQ5NDMxNTcgMTUuMDczOTAwOSwyMS4yMzA2NDkyIDE2LDIxLjIzMDY0OTIiIG1hc2s9InVybCgjc21hbGwtdmlzZW1lLXYzLWIpIi8+CiAgICA8cGF0aCBzdHJva2U9IiM0Mjg1RjQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0yNSwxMyBDMjMsMTUuMzMzMzMzMyAyMCwxNi41IDE2LDE2LjUgQzEyLDE2LjUgOSwxNS4zMzMzMzMzIDcsMTMgTDEzLDEwLjUgTDE5LDEwLjUgTDI1LDEzIFoiIG1hc2s9InVybCgjc21hbGwtdmlzZW1lLXYzLWIpIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iOCAxNCA3IDEzIDI1IDEzIDI0IDE0IiBtYXNrPSJ1cmwoI3NtYWxsLXZpc2VtZS12My1iKSIvPgogICAgPHBhdGggc3Ryb2tlPSIjNDI4NUY0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMCwzIEwxNy43Njc4NzUsNS4yNTg5MjYyMiBDMTYuNzkxNSw2LjI0NzAyNDU5IDE1LjIwODUsNi4yNDcwMjQ1OSAxNC4yMzIxMjUsNS4yNTg5MjYyMiBMMTIsMyIgbWFzaz0idXJsKCNzbWFsbC12aXNlbWUtdjMtYikiLz4KICA8L2c+Cjwvc3ZnPgo=" alt="Pronounciation link">
            </div>
            <div class="action">Learn to pronounce</div>
        </div>
    </div>
</div>

<style>
    .title {
        display: flex;
        stroke-width: 1px;
    }
    .audio-wrapper {
        margin-right: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .audio-wrapper.is_playing {
        cursor: default;
    }
    .audio {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        width: 34px;
        padding: 5px;
        border: var(--br-border);
        color: #1973e8;
        background: no-repeat;
        background-image: var(--volume-high);
        background-size: 24px;
        background-position: center;
        transition: background-color 0.1s linear;
    }
    @keyframes playing {
        0% { background-image: var(--volume-high) }
        25% { background-image: var(--volume-medium) }
        50% { background-image: var(--volume-low) }
        75% { background-image: var(--volume-medium) }
        100% { background-image: var(--volume-high) }
    }
    .audio-wrapper.is_playing .audio {
        animation: playing 0.5s linear infinite;
        background-color: #f2f2f2;
    }
    .audio :global(.berry-icon) {
        --br-icon-size: 24px;
    }
    .name {
        word-wrap: break-word;
        word-break: break-word;
        font-family: Google Sans,arial,sans-serif;
        font-size: 28px;
        font-weight: 400;
        line-height: 36px;
        vertical-align: top;
        margin-top: -6px;
    }
    .pronounce {
        display: none/*flex*/;
        align-items: center;
        margin: 8px 0 6px;
        border: var(--br-border);
        border-radius: 3px;
        overflow: hidden;
        cursor: pointer;
    }
    .image img {
        display: block;
    }
    .action {
        margin-left: 10px;
    }
</style>