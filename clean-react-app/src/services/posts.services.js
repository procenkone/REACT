import {urls} from "../configs/urls";

const get = (id) => {
    return  fetch(`${urls.users}/${id}/posts`)
        .then(response => response.json())
}

export const getPost = {
    get
}