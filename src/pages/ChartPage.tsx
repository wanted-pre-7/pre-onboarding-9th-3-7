import Chart from "react-apexcharts";
import { getChartData } from "../utils/hooks";

const ChartPage = () => {
  const { data, isLoading } = getChartData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const labels = Object.keys(data).map((v) => v.split(" ")[1]);
  const areaData = Object.values(data).map((v) => v.value_area);
  const barData = Object.values(data).map((v) => v.value_bar);
  console.log(data);
  return (
    <Chart
      series={[
        {
          name: "TEAM A",
          type: "column",
          data: barData,
        },
        {
          name: "TEAM B",
          type: "area",
          data: areaData,
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
        labels: labels,
        markers: {
          size: 0,
        },
        yaxis: {
          title: {
            text: "values",
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
