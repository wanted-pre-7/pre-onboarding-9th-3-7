import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import getChartData from "../utils/getChartData";
import CustomizedDot from "./CustomizedDot";
import CustomToolTip from "./CustomToolTip";

type Category = "전체" | "area" | "bar";
const CATEGORY: Category[] = ["전체", "area", "bar"];

const Chart = ({
  district,
  handleClick,
}: {
  district: string | null;
  handleClick: (value: string) => void;
}) => {
  const { chartData } = getChartData();
  const [dot, setDot] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  useEffect(() => {
    setSearchParams((searchParams) => {
      searchParams.set("category", "전체");
      return searchParams;
    });
  }, []);
  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { textContent } = e.currentTarget;

    setSearchParams((searchParams) => {
      searchParams.set("category", textContent ?? "전체");
      return searchParams;
    });
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
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
                />
              ))}
            </Bar>
          ) : null}
          {category === "전체" || category === "area" ? (
            <>
              <Area
                type="monotone"
                dataKey="value_area"
                fill="#82ca9d"
                stroke="#82ca9d"
                yAxisId="left"
                onClick={() => {
                  handleClick(dot);
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
            </>
          ) : null}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
