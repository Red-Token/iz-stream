<script lang="ts">
    import QRCode from 'qrcode';
    import {onMount} from 'svelte';

    export let code;

    let canvas: Element;
    let wrapper: Element;
    let scale = 0.1;
    let height: number;

    onMount(() => {
        QRCode.toCanvas(canvas, code);

        //TODO fix this its nuts

        const wrapperRect = wrapper.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        scale = wrapperRect.width / (canvasRect.width * 10);
        height = canvasRect.width * 10 * scale;
    });
</script>

<div bind:this={wrapper}>
    <canvas width="500" height="500"
            class="rounded-box"
            bind:this={canvas}
    >
        WORMROOM!
    </canvas>
</div>
