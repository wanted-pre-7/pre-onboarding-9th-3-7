import axios from "axios";

import type { IChartResponse } from "../types/chart";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) alert(response.data.message);
    return Promise.reject(error);
  },
);

export const getMockDatas = () =>
  axiosInstance.get<IChartResponse>("/mock/data.json");
