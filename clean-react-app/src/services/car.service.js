import axiosService from "./axsios.services";
import {urls} from "../configs/urls";

export const carService = {
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    update: (id,car) => axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)

}
// CRUD operation
// create
// read
// update
// delete