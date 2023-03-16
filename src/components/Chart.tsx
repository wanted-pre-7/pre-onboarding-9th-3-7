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

const ChartCategory = {
  BAR: "value_bar",
  AREA: "value_area",
} as const;
type ChartCategoryAreaType = typeof ChartCategory.AREA;
type ChartCategoryBarType = typeof ChartCategory.BAR;

type Category = ChartCategoryAreaType | ChartCategoryBarType;

const Chart = ({
  district,
  handleClick,
}: {
  district: string | null;
  handleClick: (value: string) => void;
}) => {
  const { data } = useChartData();
  const [category, setCategory] = useState<Category[]>([]);
  const [dot, setDot] = useState("");

  return (
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
          yAxisId={ChartCategory.AREA}
          label={{
            value: ChartCategory.AREA,
            angle: -90,
            position: "insideLeft",
            offset: 1,
          }}
        />
        <YAxis
          yAxisId={ChartCategory.BAR}
          orientation="right"
          label={{
            value: ChartCategory.BAR,
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
        <Legend
          height={50}
          onClick={(o) =>
            setCategory(
              category.includes(o.dataKey)
                ? category.filter((key) => key !== o.dataKey)
                : [...category, o.dataKey],
            )
          }
        />

        <Area
          type="monotone"
          dataKey={ChartCategory.AREA}
          fill="#82ca9d"
          stroke="#82ca9d"
          yAxisId={ChartCategory.AREA}
          onClick={() => {
            handleClick(dot);
          }}
          dot={
            <CustomizedDot
              cx={0}
              cy={0}
              stroke="#86d3a4"
              district={district}
              payload={{
                id: "",
                time: "",
                [ChartCategory.AREA]: 0,
                [ChartCategory.BAR]: 0,
              }}
            />
          }
          hide={category.includes(ChartCategory.AREA)}
        />

        <Bar
          dataKey={ChartCategory.BAR}
          barSize={20}
          fill="#8884d8"
          yAxisId={ChartCategory.BAR}
          onClick={(data) => handleClick(data.id)}
          hide={category.includes(ChartCategory.BAR)}
          opacity={0.6}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
            />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default Chart;
