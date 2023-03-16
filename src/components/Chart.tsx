import { useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChartData from "../hooks/useChartData";
import CustomizedDot from "./CustomizedDot";
import CustomToolTip from "./CustomToolTip";

const Chart = ({
  district,
  handleClick,
}: {
  district: string | null;
  handleClick: (value: string) => void;
}) => {
  const { data } = useChartData();

  const [hideBarChart, setHideBarChart] = useState(false);
  const [hideAreaChart, setHideAreaChart] = useState(false);
  const [dot, setDot] = useState("");

  const handleResetHide = () => {
    setHideBarChart(false);
    setHideAreaChart(false);
  };

  return (
    <>
      <button className="btn" onClick={handleResetHide}>
        전체 차트
      </button>
      <button
        className="btn"
        onClick={() => {
          hideBarChart
            ? (setHideBarChart(false), setHideAreaChart(true))
            : (setHideBarChart(true), setHideAreaChart(false));
        }}
      >
        {hideBarChart ? "Bar 차트만 보기" : "Area 차트만 보기"}
      </button>
      <ResponsiveContainer width="100%" height={600}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          barGap={10}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" />
          <YAxis
            yAxisId="left"
            label={{
              value: "value_area",
              angle: -90,
              position: "insideLeft",
              offset: 1,
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "value_bar",
              angle: 90,
              position: "insideRight",

              offset: -10,
            }}
          />
          <Tooltip
            content={
              <CustomToolTip setDot={setDot} active={false} payload={[]} />
            }
          />
          <Legend height={50} />

          <Bar
            dataKey="value_bar"
            barSize={20}
            fill="#8884d8"
            yAxisId="right"
            onClick={(data) => handleClick(data.id)}
            hide={hideBarChart}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
              />
            ))}
          </Bar>

          <Area
            type="monotone"
            dataKey="value_area"
            fill="#82ca9d"
            stroke="#82ca9d"
            yAxisId="left"
            onClick={() => {
              handleClick(dot);
            }}
            hide={hideAreaChart}
            dot={
              <CustomizedDot
                cx={0}
                cy={0}
                stroke="#86d3a4"
                district={district}
                payload={{ id: "", time: "", value_area: 0, value_bar: 0 }}
              />
            }
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
