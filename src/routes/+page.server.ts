import type { Post } from '../types/post/post.types';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async function () {
    const posts: Array<Post> = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'GET' })
        .then((response) => response.json());

    return { posts };
};