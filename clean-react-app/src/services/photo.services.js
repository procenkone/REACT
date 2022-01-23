import axiosServices from "./axios.services";

import {urls} from "../configs/urls";

export const photoServices = {
    getById:(id)=>axiosServices(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}