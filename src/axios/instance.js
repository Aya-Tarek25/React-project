import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function (request) {
        request.headers.Authorization = "barer: '" + localStorage.getItem('token');
        return request;
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    }
)