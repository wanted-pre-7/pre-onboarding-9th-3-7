import type { Dispatch } from "react";
import { useEffect } from "react";
import type { Category } from "../pages/Home";

import type { IChart } from "../types/chart";

interface Payload {
  payload: IChart;
}

interface Props {
  active: boolean;
  payload: Payload[];
  setDot: Dispatch<React.SetStateAction<string>>;
  category: Category;
}

const CustomToolTip = ({ active, payload, setDot, category }: Props) => {
  useEffect(() => {
    if (payload && payload.length) setDot(payload[0].payload.id);
  }, [payload]);

  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <h4 className="tooltip--id">📈 {payload[0].payload.id}</h4>
        <div className="tooltip--value-wrapper">
          {category === "area" || category === "전체" ? (
            <p className="tooltip--value">
              <span className="value-area">value_area</span>:{" "}
              {payload[0].payload.value_area}
            </p>
          ) : null}
          {category === "bar" || category === "전체" ? (
            <p className="tooltip--value">
              <span className="value-bar">value_bar</span>:{" "}
              {payload[0].payload.value_bar}
            </p>
          ) : null}
        </div>
      </div>
    );

  return null;
};
export default CustomToolTip;
