import type { Dispatch } from "react";
import { useEffect } from "react";
import type { TooltipProps } from "recharts";
import type { IChart } from "../types/chart";

interface Payload {
  payload: IChart;
}

interface Props {
  active: boolean;
  payload: Payload[];
  setDot: Dispatch<React.SetStateAction<string>>;
}

const CustomToolTip = ({ active, payload, setDot }: Props) => {
  useEffect(() => {
    if (payload && payload.length) setDot(payload[0].payload.id);
  }, [payload]);

  if (active && payload && payload.length)
    return (
      <div className="tooltip">
        <h4 className="tooltip--id">📈 {payload[0].payload.id}</h4>
        <div className="tooltip--value-wrapper">
          <p className="tooltip--value">
            <span className="value-area">value_area</span>:{" "}
            {payload[0].payload.value_area}
          </p>
          <p className="tooltip--value">
            <span className="value-bar">value_bar</span>:{" "}
            {payload[0].payload.value_bar}
          </p>
        </div>
      </div>
    );

  return null;
};
export default CustomToolTip;
