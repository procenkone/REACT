import axiosServices from "./axios.services";
import {urls} from "../configs/urls";

export const carsServices = {//3
    create:(car)=>axiosServices.post(urls.cars, car).then(value => value.data),
    getAll: () => axiosServices.get(urls.cars).then(value => value.data),
    getById: (id) => axiosServices.get(`${urls.cars}/${id}`).then(value => value.data),
    delById: (id) => axiosServices.delete(`${urls.cars}/${id}`).then(value => value.data),
    patchCar:(id,car) => axiosServices.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}


// export const carService = {
//     create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
//     getAll: () => axiosService.get(urls.cars).then(value => value.data),
//     getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
//     update: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
//     deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
//
// }

