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
import type { IChart } from "../types/chart";
import CustomToolTip from "./CustomToolTip";

interface IChartProps {
  data: IChart[];
  location: string;
  handleLocation: (v: string) => void;
}

const Chart = ({ data, location, handleLocation }: IChartProps) => {
  const [category, setCategory] = useState("TOTAL");

  return (
    <>
      <div>
        <button onClick={() => setCategory("TOTAL")}>전체</button>
        <button onClick={() => setCategory("AREA")}>Area</button>
        <button onClick={() => setCategory("BAR")}>Bar</button>
      </div>
      <ResponsiveContainer width="90%" height={500}>
        <ComposedChart
          data={data}
          margin={{ top: 40, right: 40, bottom: 30, left: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />
          <YAxis
            dataKey="value_bar"
            yAxisId="right"
            orientation="right"
            label={{
              value: "Bar",
              angle: 90,
              position: "insideRight",
            }}
          />
          <YAxis
            dataKey="value_area"
            yAxisId="left"
            label={{
              value: "Area",
              angle: -90,
              position: "insideLeft",
            }}
          />

          {(category === "TOTAL" || category === "AREA") && (
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="value_area"
              stroke="#c1c1c1"
              fill="grey"
            ></Area>
          )}

          {(category === "TOTAL" || category === "BAR") && (
            <Bar
              yAxisId="right"
              data={data}
              dataKey="value_bar"
              fill="blue"
              onClick={(value) => handleLocation(value.id)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.id === location
                      ? "rgba(36, 91, 254, 1)"
                      : "rgba(36, 91, 254, 0.4)"
                  }
                />
              ))}
            </Bar>
          )}

          <Legend />
          <Tooltip content={<CustomToolTip />} />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
