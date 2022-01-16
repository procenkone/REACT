const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const getIdUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
}

export const getUsers = {
    getAll,
    getIdUser
}