import type { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";
import type { IToChartProps, IValueData } from "../types/chartTypes";

const Chart = ({ data, currentParams, setSearchParams }: IToChartProps) => {
  const areaData: IValueData[] = Object.entries(data)?.map(
    ([x, { id, value_area }]) => ({
      id,
      x,
      y: value_area,
    }),
  );

  const barData: IValueData[] = Object.entries(data)?.map(
    ([x, { id, value_bar }]) => ({
      id,
      x,
      y: value_bar,
      fillColor: id === currentParams ? "#F9C80E" : "",
    }),
  );
  const Times: string[] = Object.keys(data);
  const idArr: string[] = areaData.map((el) => el.id);

  const chartSeries = {
    series: [
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
    ],
  };

  const options: ApexOptions = {
    chart: {
      stacked: false,
      fontFamily: "Spoqa Han Sans Neo",
      events: {
        click: (event, chartContext, config) => {
          const clickedId = idArr[config.dataPointIndex];
          if (clickedId) setSearchParams({ id: clickedId });
        },
      },
      selection: {
        enabled: true,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      enabled: true,
      custom({ series, dataPointIndex }) {
        return `<div class="custom-tooltip">
        <h3>${idArr[dataPointIndex]}</h3>
        <div class="group">
          <span class="group-bar">Bar: ${series[0][dataPointIndex]}</span>
          <span class="group-area">Area: ${series[1][dataPointIndex]}</span>
          <span class="group-time">Date: ${Times[dataPointIndex]}</span>
        </div>
      </div>`;
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2],
      curve: "smooth",
    },
    fill: {
      opacity: [0.85, 0.25, 1],
    },
    title: {
      text: "Flexsys - Mock data",
      align: "left",
    },
    xaxis: {
      categories: [...Times].map((el) => el.split(" ")[1]),
      tickAmount: 15,
      labels: {
        trim: false,
        rotate: 0,
        minHeight: 40,
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          text: "Bar",
          style: {
            color: "#008FFB",
            fontSize: "14px",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Area",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "Area",
          style: {
            color: "#00E396",
            fontSize: "14px",
          },
        },
      },
    ],
  };

  return (
    <ApexCharts
      options={options}
      series={chartSeries.series}
      height={430}
      type="bar"
    />
  );
};

export default Chart;
