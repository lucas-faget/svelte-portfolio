<script>
    import Welcome from "../lib/Welcome.svelte";
    import CustomButton from "../lib/CustomButton.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<main class="background-world-map">
    <Welcome text={["Lucas Faget", "Download my CV"]}/>

    <div class="cv">
        <a href="/CV_FAGET_Lucas.pdf" target="_blank" download="CV_FAGET_Lucas.pdf">
            <CustomButton text="Download" isRounded={true} />
        </a>
        <iframe title="CV" src="/CV_FAGET_Lucas.pdf"></iframe>
    </div>
</main>

<style>
    .cv {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-block: var(--vertical-gap);
    }

    iframe {
        width: 90vw;
        aspect-ratio: 0.66;
        max-width: 100%;
        max-height: 32cm;
    }
</style>
