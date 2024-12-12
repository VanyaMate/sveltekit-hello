<script lang="ts">
    export let id: number         = 0;
    export let userId: number     = 0;
    export let title: string      = '';
    export let completed: boolean = false;
</script>

<style>
    article {
        padding       : 10px;
        border-radius : 10px;
        border        : 1px solid #AAA;
    }
</style>

<article>
    <header>
        <span>id: {id}</span>
    </header>
    <h2>{title}</h2>
    <input type="checkbox" checked={completed}/>
    <footer>
        <span>user_id: {userId}</span>
    </footer>
</article>