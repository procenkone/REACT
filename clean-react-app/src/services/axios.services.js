import axios from "axios";
const axiosServices = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.' +
            'eyJhdWQiOiJjM2NiMjkzZDJlZjRiMzdmM2JiOWRmOD' +
            'U5Y2JlZjk1MSIsInN1YiI6IjYxZmU1YWFhNGI2ZDlkMDAxOWFl' +
            'OWU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJjHtyiAQhxh0lFYg2zXNb7ZB4TQga-S_zXz7erEuvU'
    }
})
export {axiosServices}