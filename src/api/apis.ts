import axios from "axios";
const BASE_URL = "/mock/data.json";

export const fetchFlexsysData = async () => {
  return await axios.get(BASE_URL);
};
