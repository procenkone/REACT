import axiosCarsService from "./axios.cars.service";
import {url} from "../../configs/carsUrls/urls";

export const carsService = {
    getAll:()=>axiosCarsService.get(url.cars).then(value => value.data),
    create:(car)=>axiosCarsService.post(url.cars, car).then(value => value.data),
    update:(car,id)=>axiosCarsService.patch(`${url.cars}/${id}`, car).then(value => value.data),
    delete:(id)=>axiosCarsService.delete(`${url.cars}/${id}`)
}