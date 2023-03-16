import axios from "axios";

export const getChartApi = async () => {
  const res = await axios.get("/mock/data.json");

  return res.data.response;
};
