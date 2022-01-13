import {urls} from "../configs/urls";

const getAll = () => {
   return  fetch(urls.users)
        .then(response => response.json())
}
const getId = (id) => {
    return  fetch(`${urls.users}/${id}`)
        .then(response => response.json())
}

export const userServices = {
    getAll,
    getId
}