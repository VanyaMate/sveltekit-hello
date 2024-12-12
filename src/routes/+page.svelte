<script lang="ts">
    import type { PageData } from './$types';
    import Post from '../components/entity/post/Post.svelte';


    let { data }: { data: PageData } = $props();
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
    {#each data.posts as post (post.id)}
        <Post
                id={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
        />
    {/each}
</section>
