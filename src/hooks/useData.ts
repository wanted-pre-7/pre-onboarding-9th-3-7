import { useState } from "react";
import getData from "../api/api";
import type { IData, List } from "../types";

const useData = () => {
  const [data, setData] = useState<IData>({});
  getData.then((res) => setData(res.data?.response));

  const labels = Object.keys(data);
  labels.unshift("");

  const dataArr = Object.values(data);

  const idList = [];
  dataArr.map((el: List) => idList.push(el.id));
  idList.unshift("");

  const areaData = [];
  dataArr.map((el: List) => areaData.push(el.value_area));
  areaData.unshift(0);

  const barData = [];
  dataArr.map((el: List) => barData.push(el.value_bar));
  barData.unshift(0);

  const areaMax = Math.max(...areaData) * 2;
  const barMax = Math.max(...barData);

  return { labels, idList, areaData, barData, areaMax, barMax };
};

export default useData;
