import {urls} from "../configs/urls";

const get = (id) => {
    return  fetch(`${urls.baseUrl}/users/${id}/posts`)
        .then(response => response.json())
}
{}
export const getPost = {
    get
}