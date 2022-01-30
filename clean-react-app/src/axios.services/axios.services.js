import axios from "axios";
import baseURL from "../configs/urls";

const axiosServices = axios.create({baseURL})//2

export default axiosServices