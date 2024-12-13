import type { PageServerLoad } from './$types';
import { connectMongo } from '@/service/db/mongo/connect';
import { Post } from '@/service/db/mongo/schema/Post.schema';


export const load: PageServerLoad = async function () {
    await connectMongo();
    const posts = await Post.find();

    return {
        posts: posts.map((post) => ({
            id   : post._id.toString(),
            title: post.title ?? '',
            body : post.body ?? '',
        })),
    };
};