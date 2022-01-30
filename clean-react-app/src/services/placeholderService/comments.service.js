import axiosPlaceholderService from "./axios.placeholder.service";
import {urls} from "../../configs/placeholderUrls/urls";

export const commentsService = {
    getAll:()=>axiosPlaceholderService.get(urls.comments).then(value => value.data),
    getById:(id)=>axiosPlaceholderService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}