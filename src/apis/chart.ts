import axios from "axios";

export const readData = async () => {
  const response = await axios.get("/mock/data.json");
  return response.data.response;
};
