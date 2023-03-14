import type { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";
import type { IChartData, IResData } from "../types/chartTypes";

const Chart = ({ data }: IResData) => {
  const detailTimes: string[] = Object.keys(data).map((el) => el.split(" ")[1]);
  const Times: string[] = detailTimes.map((el) => el.slice(0, 5));
  const Values: IChartData[] = Object.values(data);
  const idArr: string[] = Values.map((el) => el.id);

  const chartSeries = {
    series: [
      {
        name: "Bar",
        type: "bar",
        data: Values.map((row: IChartData) => row.value_bar),
      },
      {
        name: "Area",
        type: "area",
        data: Values.map((row: IChartData) => row.value_area),
      },
    ],
  };

  const options: ApexOptions = {
    chart: {
      stacked: false,
      fontFamily: "Spoqa Han Sans Neo",
      toolbar: {
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: true,
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      enabled: true,
      // react-apexchart 툴팁 : 현재 html string 형식으로밖에 지원하지 않음
      custom({ series, dataPointIndex }) {
        return `<div class="custom-tooltip">
        <h3>${idArr[dataPointIndex]}</h3>
        <div class="group">
          <span class="group-bar">Bar: ${series[0][dataPointIndex]}</span>
          <span class="group-area">Area: ${series[1][dataPointIndex]}</span>
          <span class="group-time">Time: ${detailTimes[dataPointIndex]}</span>
        </div>
      </div>`;
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    title: {
      text: "Flexsys - Mock data",
      align: "left",
    },
    xaxis: {
      categories: [...Times],
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
    <ApexCharts options={options} series={chartSeries.series} height={430} />
  );
};

export default Chart;
