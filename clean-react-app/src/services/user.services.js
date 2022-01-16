import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(`${urls.users}`)
        .then(response => response.json())
}

const getIdUser = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(response => response.json())
}

export const getUsers = {
    getAll,
    getIdUser
}