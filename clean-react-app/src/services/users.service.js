import {usersURL} from "../configsURL/usersURL";

const getAll = () => {
    return fetch(usersURL.baseURL)
        .then(response => response.json())
}

export const getUsers = {
    getAll
}