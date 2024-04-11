import axios from "axios";

const instance = axios.create({
    baseURL:'https://api-rest-d8pr.onrender.com:10000/api',
    withCredentials:true,
})
export default instance;