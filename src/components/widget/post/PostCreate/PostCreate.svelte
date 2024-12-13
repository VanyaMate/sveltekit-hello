<script lang="ts">
    import { createPostEffect } from '@/models/post/posts.model';


    let form = $state<HTMLFormElement>();

    const onSubmit = function (event: Event) {
        event.preventDefault();
        const formData = new FormData(form);
        createPostEffect(formData);
    };
</script>

<form onsubmit={onSubmit} bind:this={form}>
    <input type="text" placeholder="title" name="title"/>
    <input type="text" placeholder="body" name="body"/>
    <button type="submit">submit</button>
</form>