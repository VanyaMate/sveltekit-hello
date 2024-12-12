<script lang="ts">
    import Button from '@/components/shared/buttons/Button/Button.svelte';
    import { ButtonStyleType } from '@/components/shared/buttons/Button/Button.types';
</script>

<style>
    section {
        display        : flex;
        flex-direction : column;
        gap            : 5px;
        padding        : 10px;
    }
</style>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<section>
    <Button styleType={ButtonStyleType.DEFAULT} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.DEFAULT}>Купить</Button>
    <Button styleType={ButtonStyleType.PRIMARY} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.PRIMARY}>Купить</Button>
    <Button styleType={ButtonStyleType.GHOST} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.GHOST}>Купить</Button>
</section>
