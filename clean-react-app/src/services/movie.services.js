import {axiosServices} from "./axios.services";

export const movieServices = {
    getAll:()=>axiosServices.get('/discover/movie').then(value => value.data),
    getById:(id)=>axiosServices.get(`/discover/movie/${id}`).then(value => value.data),
    getPopular:()=>axiosServices.get('/movie/top_rated').then(value => value.data)
}