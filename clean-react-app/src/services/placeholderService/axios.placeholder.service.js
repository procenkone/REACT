import axios from "axios";
import baseURL from "../../configs/placeholderUrls/urls";

const axiosPlaceholderService = axios.create({baseURL})

export default axiosPlaceholderService