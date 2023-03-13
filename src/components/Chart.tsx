import { BarChart, ResponsiveContainer, YAxis } from "recharts";
import type { IChart } from "../types/chart";

const Chart = ({ data }: { data: IChart[] }) => {
  return (
    <ResponsiveContainer width="70%" height={500}>
      <BarChart data={data}>
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
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
