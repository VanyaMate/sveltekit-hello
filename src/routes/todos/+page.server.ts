import type { PageServerLoad } from './$types';
import type { Todo } from '../../types/todo/todo.types';


export const load: PageServerLoad = async function () {
    const todos: Array<Todo> = await fetch(`https://jsonplaceholder.typicode.com/todos`, { method: 'GET' })
        .then((response) => response.json());

    return { todos };
};