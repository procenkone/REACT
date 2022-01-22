import axiosServices from "./axios.services";
import {urls} from "../configs/urls";

export const postsServices = {
    getAll:()=>axiosServices(urls.posts).then(value => value.data),
    getById:(id)=>axiosServices(`${urls.posts}/${id}`).then(value => value.data)
}