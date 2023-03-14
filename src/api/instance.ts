import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: "/mock/data.json",
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
