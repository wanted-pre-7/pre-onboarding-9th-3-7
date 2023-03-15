import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchData = (fetchFunc: () => Promise<AxiosResponse>) => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetchFunc();
      if (res) setFetchData(res.data.response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return fetchData;
};

export default useFetchData;
