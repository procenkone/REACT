import axiosServices from "./axios.services";
import {urls} from "../configs/urls";

export const albumsServices = {
    getById:(id)=>axiosServices.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}