import axios from "axios";

export const getChart = async () => {
  const response = await axios.get("/src/mock/data.json");

  return response.data.response;
};
