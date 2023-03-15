import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { renderToString } from "react-dom/server";
import CustomTooltip from "./Tooltip";

const MixedChart = ({
  idData,
  barData,
  areaData,
  labels,
  handleFilter,
}: ChartPropsType) => {
  const [change, setChange] = useState(true);
  useEffect(() => {
    if (barData && areaData) {
      setChange(false);
    }
  }, [barData, areaData]);

  if (change) {
    return <div></div>;
  }
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
            dataPointSelection(e, chartContext, config) {
              handleFilter(idData[config.dataPointIndex]);
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
        labels: labels,
        markers: {
          size: 0,
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
            max: 150,
          },
        ],
        tooltip: {
          enabled: true,
          custom: ({ dataPointIndex }) => {
            return renderToString(
              <CustomTooltip
                active={true}
                data={{
                  id: idData[dataPointIndex],
                  area: areaData[dataPointIndex].y,
                  bar: barData[dataPointIndex].y,
                }}
              />,
            );
          },
        },
      }}
    ></Chart>
  );
};

interface IData {
  x: string;
  y: number;
  fillColor: string;
}
type ChartPropsType = {
  idData: string[];
  barData: IData[];
  areaData: IData[];
  labels: string[];
  handleFilter: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | string,
  ) => void;
};

export default MixedChart;
