import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7a1c19ea3c361a4d3cc53eb70ef8298c",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    // PARAMS
    config.params['language'] = localStorage.getItem('lang');
    // HEADERS
    // config.headers['Autherization'] = '1234sdadas6d5sd4s8d4as5dd1asd2';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
