<script lang="ts">
    import Button from '@/components/shared/buttons/Button/Button.svelte';
    import { ButtonStyleType } from '@/components/shared/buttons/Button/Button.types';
    import type { PageData } from './$types';
    import PostCreate from '@/components/widget/post/PostCreate/PostCreate.svelte';
    import { postModel } from '@/models/post/posts.model';
    import PostList from '@/components/entity/post/PostList/PostList.svelte';


    let { data }: { data: PageData } = $props();

    postModel.set(data.posts);
</script>


<style>
    section {
        display        : flex;
        flex-direction : column;
        gap            : 5px;
        padding        : 10px;
    }
</style>

<PostCreate/>

<section>
    <Button styleType={ButtonStyleType.DEFAULT} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.DEFAULT}>Купить</Button>
    <Button styleType={ButtonStyleType.PRIMARY} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.PRIMARY}>Купить</Button>
    <Button styleType={ButtonStyleType.GHOST} href="/todos">Купить</Button>
    <Button styleType={ButtonStyleType.GHOST}>Купить</Button>
</section>

<PostList posts={$postModel ?? postModel.get()}/>
