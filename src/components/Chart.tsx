import { useState } from "react";
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
import useChartData from "../hooks/useChartData";
import CustomizedDot from "./CustomizedDot";
import CustomToolTip from "./CustomToolTip";

type Category = "area" | "bar";
const CATEGORY: Category[] = ["area", "bar"];
const Chart = ({ handleClick }: { handleClick: (value: string) => void }) => {
  const { data } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const district = searchParams.get("district");
  const category = searchParams.get("category");

  const [dot, setDot] = useState("");

  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    district === null
      ? setSearchParams({ category: e.currentTarget.textContent as Category })
      : setSearchParams({
          district: district,
          category: e.currentTarget.textContent as Category,
        });
  };

  return (
    <>
      <div className="btn-wrapper">
        <button
          className={`${
            category === null || category === "전체" ? "btn-active" : "btn"
          }`}
          onClick={handleClickCategory}
        >
          전체
        </button>
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
          {category === null || category === "전체" || category === "bar" ? (
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
          {category === null || category === "전체" || category === "area" ? (
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
          ) : null}
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
export default Chart;
