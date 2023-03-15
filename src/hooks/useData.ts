import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useData = (api: () => Promise<AxiosResponse>) => {
  const [data, settData] = useState({});

  useEffect(() => {
    const getList = async () => {
      const res = await api();
      settData(res.data.response);
    };

    getList();
  }, []);

  return [data, settData];
};

export default useData;
