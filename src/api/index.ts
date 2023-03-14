import axios from "axios";

export const getChartData = async () => {
  const res = await axios.get("/mock/data.json");

  return res.data.response;
};
