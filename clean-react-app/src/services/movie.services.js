import {axiosServices} from "./axios.services";

export const movieServices = {
    getAll:()=>axiosServices.get('/discover/movie?language=ru-RU').then(value => value.data),
    getById:(id)=>axiosServices.get(`/discover/movie/${id}`).then(value => value.data),
    getPopular:()=>axiosServices.get('/movie/top_rated?language=ru-RU').then(value => value.data),
    paginationMovie:(page)=>axiosServices.get(`/discover/movie?language=ru-RU&page=${page}`).then(value => value.data),
    movieInfo:(id)=>axiosServices(`/movie/${id}?language=ru-RU`).then(value => value.data),
    reviewsById:(id)=>axiosServices.get(`/movie/${id}/reviews`).then(value => value.data)
}