import axiosService from "./axios.service";

import {urls} from "../configs/urls";

export const EpisodesPage = {
    getById: (id) => axiosService(`${urls.episodePage}${id}`).then(value => value.data)
}