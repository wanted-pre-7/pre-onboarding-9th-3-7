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
import CustomToolTip from "./CustomToolTip";

type Category = "전체" | "area" | "bar";
const CATEGORY: Category[] = ["전체", "area", "bar"];

const Chart = ({
  district,
  handleClick,
}: {
  district: string;
  handleClick: (value: string) => void;
}) => {
  const { data } = useChartData();
  const [category, setCategory] = useState<Category>("전체");

  const [dot, setDot] = useState("");

  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.textContent as Category);
  };
  const CustomizedDot = (props: any) => {
    const { cx, cy, stroke, payload } = props;

    if (payload.id === district) {
      return (
        <svg x={cx - 3} y={cy - 3} fill="white">
          <g transform="translate(4 4)">
            <circle r="4" fill={stroke} />
            <circle r="2" fill={stroke} />
          </g>
        </svg>
      );
    }

    return null;
  };

  return (
    <>
      <div className="btn-wrapper">
        {CATEGORY.map((item) => (
          <button
            className={`${item === category ? "btn-active" : "btn"}`}
            key={item}
            onClick={handleClickCategory}
          >
            {item}
          </button>
        ))}
      </div>

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
          {category === "전체" || category === "bar" ? (
            <Bar
              dataKey="value_bar"
              barSize={20}
              fill="#8884d8"
              yAxisId="right"
              onClick={(data) => handleClick(data.id)}
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
              onClick={(e: any) => {
                handleClick(dot);
              }}
              dot={<CustomizedDot />}
              // label={<CustomizedLabel />}
            />
          ) : null}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
