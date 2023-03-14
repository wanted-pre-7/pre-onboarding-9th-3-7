import Chart from "react-apexcharts";
import { getChartData } from "../utils/hooks";

const ChartPage = () => {
  const { data, isloading } = getChartData();

  if (isloading) {
    return <div>Loading...</div>;
  }
  const Xaxis = Object.keys(data).map((v) => v.split(" ")[1]);

  return (
    <Chart
      series={[
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
      ]}
      options={{
        chart: {
          events: {
            xAxisLabelClick: () => {
              console.log("x");
            },
          },
        },
        stroke: {
          width: [0, 2],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        fill: {
          opacity: [1, 0.2],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: Xaxis.slice(0, 11),
        markers: {
          size: 0,
        },
        yaxis: {
          title: {
            text: "Points",
          },
          min: 0,
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      }}
    ></Chart>
  );
};

export default ChartPage;
