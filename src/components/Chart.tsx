import { useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChartData from "../hooks/useChartData";
import CustomToolTip from "./CustomToolTip";

type Category = "전체" | "area" | "bar";
const CATEGORY: Category[] = ["전체", "area", "bar"];

const Chart = () => {
  const { data } = useChartData();

  return (
    <>
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
          <Tooltip content={<CustomToolTip />} />
          <Legend height={50} />
          <Bar
            dataKey="value_bar"
            barSize={20}
            fill="#8884d8"
            yAxisId="right"
          />
          <Area
            type="basis"
            dataKey="value_area"
            fill="#82ca9d"
            stroke="#82ca9d"
            yAxisId="left"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
