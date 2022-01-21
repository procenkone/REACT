import axiosServices from "./axios.services";
import {urls} from "../configs/urls";

export const carServices = {
    getAll: () => axiosServices.get(urls.cars).then(value => value.data),
    create: (car) => axiosServices.post(urls.cars, car).then(value => value.data),
    update: (car, id) => axiosServices.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    delete: (id) => axiosServices.delete(`${urls.cars}/${id}`).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.cars}/${id}`).then(value => value.data)
}

// CRUD