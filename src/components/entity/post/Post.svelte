<script lang="ts">
    export let title: string  = '';
    export let body: string   = '';
    export let userId: number = 0;
    export let id: number     = 0;
</script>

<style>
    article {
        padding       : 10px;
        border-radius : 10px;
        background    : #EEE;
    }
</style>

<article>
    <header>
        <span>id: {id}</span>
    </header>
    <h2>{title}</h2>
    <p>{body}</p>
    <footer>
        <span>user_id: {userId}</span>
    </footer>
</article>