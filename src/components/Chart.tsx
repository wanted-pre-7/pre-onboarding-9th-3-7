import type { ApexOptions } from "apexcharts";
import { useRef } from "react";
import ApexCharts from "react-apexcharts";
import type { IAreaData, IBarData, IChartProps } from "../types/chart";
import StyledChartDiv from "./StyleChartDiv";
import StyledButton from "./StyledButton";

const Chart = ({ data, searchId, updateSearchParams }: IChartProps) => {
  const barColor = "#6CB7DA";
  const areaColor = "#B5B5B3";
  const highlightColor = "#D77186";
  const chartHeight = 550;

  const chartRef = useRef<any>(null);

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
      fillColor: id === searchId ? highlightColor : "",
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
            const selectId = barData[dataPointIndex].id;
            updateSearchParams({ id: selectId });
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

  const chartSelectReset = () => {
    const selectedDataPoints =
      chartRef.current?.chart.w.globals.selectedDataPoints;

    if (selectedDataPoints.length > 0) {
      chartRef.current?.chart.toggleDataPointSelection(
        0,
        selectedDataPoints[0][0],
      );
    }
  };

  const chartFilterHandler = (selectId: string) => {
    chartSelectReset();
    updateSearchParams({ id: selectId });
  };

  const chartResetHandler = () => {
    chartSelectReset();
    updateSearchParams({});
  };

  return (
    <StyledChartDiv>
      <div>
        {ids.length > 0 &&
          ids.map((id) => {
            return (
              <StyledButton
                key={id}
                onClick={() => {
                  chartFilterHandler(id);
                }}
              >
                {id}
              </StyledButton>
            );
          })}
        <StyledButton onClick={chartResetHandler}>선택해제</StyledButton>
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
    </StyledChartDiv>
  );
};
export default Chart;
