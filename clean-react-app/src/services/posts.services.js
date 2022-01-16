const get = (id) => {
    return  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
}

export const getPost = {
    get
}