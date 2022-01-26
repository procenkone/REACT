import axiosService from "./axios.service";

import {urls} from "../configs/urls";

export const LocationsService = {
    getAll: () => axiosService.get(urls.locations).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.locations}/${id}`).then(value => value.data)
}