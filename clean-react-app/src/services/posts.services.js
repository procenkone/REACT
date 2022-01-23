import axiosServices from "./axios.services";

import {urls} from "../configs/urls";

export const postsServices = {
    getAll: () => axiosServices(urls.posts).then(value => value.data),
    getById: (id) => axiosServices(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getPostById: (id) => axiosServices(`${urls.posts}/${id}`).then(value => value.data)
}