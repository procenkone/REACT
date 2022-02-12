import {axiosServices} from "./axios.services";

export const movieServices = {
    getAll: () => axiosServices.get('/discover/movie?language=ru-RU').then(value => value.data),
    getPopular: () => axiosServices.get('/movie/top_rated?language=ru-RU').then(value => value.data),
    paginationMovie: (page) => axiosServices.get(`/discover/movie?language=ru-RU&page=${page}`).then(value => value.data),
    movieInfo: (id) => axiosServices(`/movie/${id}?language=ru-RU`).then(value => value.data),
    reviewsById: (id) => axiosServices.get(`/movie/${id}/reviews`).then(value => value.data),
    getVideo: (id) => axiosServices(`movie/${id}/videos`).then(value => value.data),
    getUpcoming: () => axiosServices(`/movie/upcoming?language=ru-RU`).then(value => value.data),
    getActor: (id) => axiosServices(`/movie/${id}/credits?language=ru-RU`).then(value => value.data),
    genreList: () => axiosServices(`/genre/movie/list?language=ru-RU`).then(value => value.data),
    getGenre:(id)=>axiosServices(`/discover/movie?&language=ru-RU&with_genres=${id}`).then(value => value.data),
    paginationGenre:(genreId,page)=>axiosServices.get(`/discover/movie?language=ru-RU&with_genres=${genreId}&page=${page}`).then(value => value.data)
}
