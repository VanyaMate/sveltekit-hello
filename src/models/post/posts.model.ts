import { effect, store } from '@vanyamate/sec';
import { createPostAction } from '@/actions/post/createPost.action';


export const createPostEffect = effect(createPostAction);

export const postModel = store<Array<{
    id: string,
    title: string,
    body: string
}>>([ { id: 'test', title: 'test', body: 'text' } ])
    .on(createPostEffect, 'onSuccess', (state, payload) => {
        return state.concat(payload.result!);
    });