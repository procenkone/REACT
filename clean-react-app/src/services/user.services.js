import baseUrl from "../configs/urls";

const all = () => {
    return fetch(`${baseUrl}/users`)
        .then(response => response.json())
}

export const getUser = {
    all
}