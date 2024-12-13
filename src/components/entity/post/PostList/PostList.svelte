<script lang="ts">
    export let posts: Array<{ id: string, title: string, body: string }> = [];
</script>

<style>
    section {
        padding        : var(--offset-small);
        display        : flex;
        flex-direction : column;
        gap            : var(--offset-small);

        article {
            padding       : var(--offset-extra-small);
            background    : rgba(var(--bg-second));
            border-radius : var(--offset-extra-small);
        }
    }
</style>

<section>
    <h1>Posts</h1>
    {#each posts as post}
        <article>
            <header>
                <span>id: {post.id}</span>
            </header>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    {/each}
</section>