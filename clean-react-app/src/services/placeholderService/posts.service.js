import axiosPlaceholderService from "./axios.placeholder.service";
import {urls} from "../../configs/placeholderUrls/urls";

export const postsService = {
    getAll:()=>axiosPlaceholderService.get(urls.posts).then(value => value.data),
    getById:(id)=>axiosPlaceholderService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data)
}