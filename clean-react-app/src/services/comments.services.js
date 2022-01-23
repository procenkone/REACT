import axiosServices from "./axios.services";

import {urls} from "../configs/urls";

export const commentsServices = {
    getAll: () => axiosServices(urls.comments).then(value => value.data),
    getById: (id) => axiosServices(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}