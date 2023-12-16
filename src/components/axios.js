import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.taxicentraalsoest.nl/api'
});
export default instance;