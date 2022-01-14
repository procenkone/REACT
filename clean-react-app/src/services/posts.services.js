import {urls} from "../configs/urls";

const getPostsServ = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(response => response.json())
}
export const postsServices = {
    getPostsServ

}