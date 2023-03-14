import Chart from "react-apexcharts";
import { renderToString } from "react-dom/server";
import CustomTooltip from "../components/Tooltip";
import { getChartData } from "../utils/hooks";

const ChartPage = () => {
  const { data, isLoading } = getChartData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const labels = Object.keys(data).map((v) => v.split(" ")[1]);
  const areaData = Object.values(data).map((v) => v.value_area);
  const barData = Object.values(data).map((v) => v.value_bar);
  const idData = Object.values(data).map((v) => v.id);

  return (
    <Chart
      series={[
        {
          name: "BAR",
          type: "column",
          data: barData,
        },
        {
          name: "AREA",
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
          enabled: true,
          custom: ({ dataPointIndex }) => {
            return renderToString(
              <CustomTooltip
                active={true}
                data={{
                  id: idData[dataPointIndex],
                  area: areaData[dataPointIndex],
                  bar: barData[dataPointIndex],
                }}
              />,
            );
          },
        },
      }}
    ></Chart>
  );
};

export default ChartPage;
