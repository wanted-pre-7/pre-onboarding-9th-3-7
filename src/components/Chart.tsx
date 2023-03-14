import type { ApexOptions } from "apexcharts";
import { useRef } from "react";
import ApexCharts from "react-apexcharts";
import type { IAreaData, IBarData, IChart } from "../types/chart";

const Chart = ({ data }: IChart) => {
  const barColor = "#546E7A";
  const areaColor = "#E91E63";
  const chartHeight = 550;

  const chartRef = useRef(null);

  const areaData: IAreaData[] = Object.entries(data)?.map(
    ([x, { id, value_area }]) => ({
      id,
      y: value_area,
      x,
    }),
  );
  const barData: IBarData[] = Object.entries(data)?.map(
    ([x, { id, value_bar }]) => ({
      id,
      y: value_bar,
      x,
    }),
  );
  const categoryData = Object.keys(data);

  const options: ApexOptions = {
    chart: {
      width: "100%",
      zoom: {
        enabled: true,
      },
      selection: {
        enabled: false,
      },
    },
    stroke: {
      width: [0, 1],
      curve: "smooth",
    },
    title: {
      text: "",
    },
    colors: [barColor, areaColor],
    fill: {
      opacity: [1, 0.4],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    xaxis: {
      type: "category",
      categories: categoryData,
      tickPlacement: "on",
    },
    yaxis: [
      {
        title: {
          text: "Bar",
        },
      },
      {
        opposite: true,
        title: {
          text: "Area",
        },
      },
    ],
  };

  const series = [
    {
      name: "Bar",
      type: "bar",
      data: barData,
    },
    {
      name: "Area",
      type: "area",
      data: areaData,
    },
  ];

  return (
    <>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="line"
          height={chartHeight}
          ref={chartRef}
        />
      </div>
    </>
  );
};
export default Chart;
