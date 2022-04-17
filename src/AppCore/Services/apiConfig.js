import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = 'http://localhost:6789';

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function post(url, config) {
  return await axiosApi
    .post(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function put(url, {id, config}) {
  return await axiosApi
    .put(`${url}/${id}`, {
      ...config,
    })
    .then((response) => response.data);
}

export async function del(url, id) {
  return await axiosApi
    .delete(`${url}/${id}`)
    .then((response) => response.data);
}