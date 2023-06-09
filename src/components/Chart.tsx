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
import type { Category } from "../pages/Home";
import CustomizedDot from "./CustomizedDot";
import CustomToolTip from "./CustomToolTip";

interface Props {
  district: string;
  handleClickDistrict: (value: string) => void;
  category: Category;
}

const Chart = ({ district, handleClickDistrict, category }: Props) => {
  const { data } = useChartData();
  const [dot, setDot] = useState("");

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
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
              <CustomToolTip
                setDot={setDot}
                active={false}
                payload={[]}
                category={category}
              />
            }
          />
          <Legend height={50} />
          {category === "전체" || category === "bar" ? (
            <Bar
              dataKey="value_bar"
              barSize={20}
              fill="#8884d8"
              yAxisId="right"
              onClick={(data) => handleClickDistrict(data.id)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
                />
              ))}
            </Bar>
          ) : null}
          {category === "전체" || category === "area" ? (
            <Area
              type="monotone"
              dataKey="value_area"
              fill="#82ca9d"
              stroke="#82ca9d"
              yAxisId="left"
              onClick={() => {
                handleClickDistrict(dot);
              }}
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
          ) : null}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
