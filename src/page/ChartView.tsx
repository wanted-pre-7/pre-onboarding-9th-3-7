import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Bar,
  Cell,
} from "recharts";
import { useParams, useNavigate } from "react-router-dom";
import CustomTooltip from "../component/CustomTooltip";
import { getChartData } from "../api/chartData";
import Buttons from "../component/Buttons";

const mockData = getChartData();

const ChartView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  getChartData();
  return (
    <>
      <ComposedChart
        width={1000}
        height={600}
        data={mockData}
        margin={{
          top: 10,
          right: 30,
          left: 60,
          bottom: 300,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis
          type="number"
          tickCount={10}
          yAxisId={"bar"}
          orientation="right"
          label={{ value: "value_area", angle: 90, position: "insideRight" }}
        />
        <YAxis
          type="number"
          tickCount={10}
          yAxisId={"area"}
          label={{ value: "value_bar", angle: -90, position: "insideLeft" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value_bar" yAxisId={"bar"}>
          {mockData.map((el, idx) => (
            <Cell
              key={idx}
              fill={el.id === id ? "#636363" : "#D9D9D9"}
              onClick={() => navigate("/" + el.id)}
            />
          ))}
        </Bar>
        <Area
          type="monotone"
          dataKey="value_area"
          stroke="#8884d8"
          fill="#8884d8"
          yAxisId={"area"}
        ></Area>
      </ComposedChart>
      <Buttons />
    </>
  );
};

export default ChartView;
