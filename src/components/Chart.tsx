import type { ApexOptions } from "apexcharts";
import { useRef } from "react";
import ApexCharts from "react-apexcharts";
import type { IAreaData, IBarData, IChart } from "../types/chart";

const Chart = ({ data }: IChart) => {
  const barColor = "#546E7A";
  const areaColor = "#E91E63";
  const highlightColor = "#00b4f0";
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

  const ids = [...new Set(barData.map((d) => d.id))];

  const options: ApexOptions = {
    chart: {
      width: "100%",
      zoom: {
        enabled: true,
      },
      selection: {
        enabled: false,
      },
      events: {
        click: function (event, chartContext, config) {
          const dataPointIndex = config.dataPointIndex;

          if (config.seriesIndex > -1 && dataPointIndex > -1) {
            const id = barData[dataPointIndex].id;
            const prevZoom = chartContext.zoomPanSelection;
            chartContext.updateOptions(
              {
                series: [
                  {
                    name: "Bar",
                    type: "bar",
                    data: barData.map((d, i) => ({
                      ...d,
                      fillColor: d.id === id ? highlightColor : "",
                    })),
                  },
                  {
                    name: "Area",
                    type: "area",
                    data: areaData,
                  },
                ],
              },
              false,
            );

            chartContext.zoomX(prevZoom.minX, prevZoom.maxX);
          }
        },
        selection: function (chartContext, { xaxis, yaxis }) {
          if (xaxis && xaxis.min && xaxis.max) {
            const idList = [
              ...new Set(
                barData
                  .slice(Math.floor(xaxis.min), Math.floor(xaxis.max))
                  .map((d) => d.id),
              ),
            ];
            chartContext.updateOptions(
              {
                series: [
                  {
                    name: "Bar",
                    type: "bar",
                    data: barData.map((d, i) => ({
                      ...d,
                      fillColor: idList.includes(d.id) ? highlightColor : "",
                    })),
                  },
                  {
                    name: "Area",
                    type: "area",
                    data: areaData,
                  },
                ],
              },
              false,
            );
          }
        },
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
    tooltip: {
      shared: true,
      x: {
        show: false,
        formatter: function (val, { series, seriesIndex, dataPointIndex, w }) {
          return (
            categoryData[dataPointIndex] + "<br/>" + barData[dataPointIndex].id
          );
        },
      },
    },
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

  const chartFilterHandler = (id: string) => {
    chartRef.current?.chart.updateOptions(
      {
        series: [
          {
            name: "Bar",
            type: "bar",
            data: barData.map((d) => ({
              ...d,
              fillColor: id == d.id ? highlightColor : "",
            })),
          },
          {
            name: "Area",
            type: "area",
            data: areaData,
          },
        ],
      },
      false,
    );
  };
  const chartResetHandler = () => {
    chartRef.current?.chart.updateOptions(
      {
        series: [
          {
            name: "Bar",
            type: "bar",
            data: barData.map((d) => ({
              ...d,
            })),
          },
          {
            name: "Area",
            type: "area",
            data: areaData,
          },
        ],
      },
      false,
    );
  };

  return (
    <>
      <div>
        {ids.length > 0 &&
          ids.map((id) => {
            return (
              <button
                key={id}
                onClick={() => {
                  chartFilterHandler(id);
                }}
              >
                {id}
              </button>
            );
          })}
        <button onClick={chartResetHandler}>reset</button>
      </div>
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
