import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Bar,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { getChartData } from "../api/chartData";

const mockData = getChartData();

const ChartView = () => {
  getChartData();
  return (
    <ComposedChart
      width={1200}
      height={400}
      data={mockData}
      margin={{
        top: 10,
        right: 30,
        left: 60,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis yAxisId={"bar"} orientation="right" label={"bar"} />
      <YAxis yAxisId={"area"} label="area" />
      <Tooltip content={<CustomTooltip />} />
      <Area
        type="monotone"
        dataKey="value_area"
        stroke="#8884d8"
        fill="#8884d8"
        yAxisId={"area"}
      />
      <Bar dataKey="value_bar" fill="#82ca9d" yAxisId={"bar"} />
    </ComposedChart>
  );
};

export default ChartView;
