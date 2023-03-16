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
      fillColor: id === currentParams ? "#f9c60ec4" : "",
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
        enabled: false,
      },
      toolbar: {
        tools: {
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
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
    grid: {
      strokeDashArray: 5,
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
      text: "Flexsys - Mock data chart",
      align: "left",
    },
    colors: ["#3f51b5b6", "	#C4BBAF"],
    xaxis: {
      tooltip: {
        enabled: false,
      },
      overwriteCategories: [...Times].map((el) => el.split(" ")[1]),
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
        },
        title: {
          text: "Bar",
          style: {
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
        },
        title: {
          text: "Area",
          style: {
            fontSize: "14px",
          },
        },
      },
    ],
  };

  return (
    <ApexCharts options={options} series={chartSeries.series} height={430} />
  );
};

export default Chart;
