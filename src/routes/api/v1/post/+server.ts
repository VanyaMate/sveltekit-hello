import { Post } from '@/service/db/mongo/schema/Post.schema';
import { json } from '@sveltejs/kit';


export const POST = async function ({ request }) {
    const data  = await request.formData();
    const title = data.get('title');
    const body  = data.get('body');

    const post = await Post.create({ title, body });

    return json({
        success: true,
        data   : {
            id   : post._id,
            title: post.title,
            body : post.body,
        },
    }, { status: 201 });
};