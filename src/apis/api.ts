import axios from "axios";
const BASE_URL = `http://localhost:3000`;

export const fetchFlexsysData = async () => {
  return await axios.get(`${BASE_URL}/response`);
};
