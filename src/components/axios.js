import axios from "axios";

const instance = axios.create({
    baseURL: 'http://13.51.13.8:3000/api'
});
export default instance;