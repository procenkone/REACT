import axiosServices from "./axios.services";

import {urls} from "../configs/urls";

export const userServices = {
    getAll: () => axiosServices.get(urls.users).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.users}/${id}`)
}
