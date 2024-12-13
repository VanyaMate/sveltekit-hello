export const createPostAction = async function (formData: FormData): Promise<{
    id: string,
    body: string,
    title: string
}> {
    return fetch(`/api/v1/post`, { method: 'POST', body: formData })
        .then((response) => response.json())
        .then((response) => response.data);
};