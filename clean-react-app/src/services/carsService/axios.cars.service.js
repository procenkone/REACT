import axios from "axios";
import baseURL from "../../configs/carsUrls/urls";

const axiosCarsService = axios.create({baseURL})

export default axiosCarsService