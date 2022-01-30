import axiosPlaceholderService from "./axios.placeholder.service";
import {urls} from "../../configs/placeholderUrls/urls";

export const usersService = {
    getAll:()=>axiosPlaceholderService.get(urls.users).then(value => value.data),
    getById:(id)=>axiosPlaceholderService.get(`${urls.users}/${id}`).then(value => value.data)
}