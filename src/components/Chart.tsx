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
  AREA_HIGHLIGHT: "value_area_highlight",
} as const;
type ChartCategoryAreaType = typeof ChartCategory.AREA;
type ChartCategoryBarType = typeof ChartCategory.BAR;

type Category = ChartCategoryAreaType | ChartCategoryBarType;

const barColor = "#6CB7DA";
const areaColor = "#B5B5B3";
const dotColor = "#B5B5B4";
const highlightColor = "#005282";

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

  const chartData = data.map((item) => {
    if (item.id === district) {
      return { ...item, [ChartCategory.AREA_HIGHLIGHT]: item.value_area };
    }
    return { ...item };
  });

  return (
    <ResponsiveContainer width="100%" height={600}>
      <ComposedChart
        data={chartData}
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
          yAxisId={ChartCategory.BAR}
          label={{
            value: ChartCategory.BAR,
            angle: -90,
            position: "insideLeft",
            offset: 1,
          }}
        />
        <YAxis
          yAxisId={ChartCategory.AREA}
          orientation="right"
          label={{
            value: ChartCategory.AREA,
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
          legendType="none"
          dataKey={ChartCategory.AREA_HIGHLIGHT}
          fill={dotColor}
          stroke={dotColor}
          yAxisId={ChartCategory.AREA}
          hide={category.includes(ChartCategory.AREA)}
        />
        <Area
          type="monotone"
          dataKey={ChartCategory.AREA}
          fill={areaColor}
          stroke={areaColor}
          yAxisId={ChartCategory.AREA}
          onClick={() => {
            handleClick(dot);
          }}
          dot={
            <CustomizedDot
              cx={0}
              cy={0}
              stroke={dotColor}
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
          fill={barColor}
          yAxisId={ChartCategory.BAR}
          onClick={(data) => handleClick(data.id)}
          hide={category.includes(ChartCategory.BAR)}
          opacity={0.5}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`${entry.id === district ? highlightColor : barColor}`}
            />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default Chart;
