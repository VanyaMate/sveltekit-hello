<script lang="ts">
    import type { PageData } from './$types';
    import Todo from '../../components/entity/todo/Todo.svelte';


    let { data }: { data: PageData } = $props();
</script>

<style>
    section {
        padding        : 10px;
        display        : flex;
        flex-direction : column;
        gap            : 10px;
    }
</style>

<section>
    <h1>todos</h1>
    {#each data.todos as todo}
        <Todo
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
        />
    {/each}
</section>

