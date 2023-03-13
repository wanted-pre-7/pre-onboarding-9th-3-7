import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import type { IChart } from "../types/chart";

const Chart = ({ data }: { data: IChart[] }) => {
  return (
    <ResponsiveContainer width="70%" height={500}>
      <ComposedChart
        data={data}
        margin={{ top: 40, right: 40, bottom: 30, left: 40 }}
      >
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
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="value_area"
          fill="#82ca9d"
          stroke="#82ca9d"
        />
        <Bar
          yAxisId="right"
          dataKey="value_bar"
          fill="rgba(36, 91, 254, 0.4)"
        />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
