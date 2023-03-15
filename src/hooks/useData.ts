import { useEffect, useState } from "react";
import getData from "../api/api";
import type { IData, List } from "../types";

const useData = () => {
  const [data, setData] = useState<IData>({});
  useEffect(() => {
    getData.then((res) => setData(res.data?.response));
  }, []);

  const labels = Object.keys(data);
  labels.unshift("");

  const dataArr = Object.values(data);

  const uniqueIdList: string[] = [];
  dataArr.map(
    (el: List) => !uniqueIdList.includes(el.id) && uniqueIdList.push(el.id),
  );

  const idList = [""];
  dataArr.map((el: List) => idList.push(el.id));

  const { areaData, barData } = dataArr.reduce(
    (acc, { value_area, value_bar }) => {
      acc.areaData.push(value_area);
      acc.barData.push(value_bar);
      return acc;
    },
    { areaData: [0], barData: [0] },
  );

  const areaMax = Math.max(...areaData) * 2;
  const barMax = Math.max(...barData);

  return { labels, uniqueIdList, idList, areaData, barData, areaMax, barMax };
};

export default useData;
