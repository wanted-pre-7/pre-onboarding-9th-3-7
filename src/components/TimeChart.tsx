import type { ChartOptions } from "chart.js";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useRef } from "react";
import { Chart, getElementAtEvent } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import useData from "../hooks/useData";
import useHighlight from "../hooks/useHighlight";

const TimeChart = () => {
  const navigate = useNavigate();
  const { labels, areaData, barData, areaMax, barMax, idList } = useData();
  const { barBg, areaBg, barBorder, areaBorder } = useHighlight();

  const chartRef = useRef<any>();

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const element = getElementAtEvent(chartRef.current, e);
    if (element.length > 0 && element[0].index > 0)
      navigate(`/${idList[element[0].index]}`);
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "value_area",
        yAxisID: "value_area",
        backgroudColor: areaBg,
        borderColor: areaBorder,
        borderWidth: 1,
        pointRadius: 0,
        segment: {
          backgroundColor: (ctx: any) => {
            const idx = ctx.p1.parsed.x;
            return areaBg[idx];
          },
          borderColor: (ctx: any) => {
            const idx = ctx.p1.parsed.x;
            return areaBorder[idx];
          },
        },
        fill: true,
        tension: 0.4,
        order: 1,
        data: areaData,
      },
      {
        type: "bar" as const,
        label: "value_bar",
        yAxisID: "value_bar",
        backgroundColor: barBg,
        borderColor: barBorder,
        borderWidth: 1,
        order: 2,
        data: barData,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      value_bar: {
        position: "left",
        title: {
          display: true,
          text: "value_bar",
        },
        max: barMax,
      },
      value_area: {
        position: "right",
        title: {
          display: true,
          text: "value_area",
        },
        max: areaMax,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index",
        filter: (e) => !(e.dataIndex === 0),
        callbacks: {
          title: (tooltipItems) =>
            idList[tooltipItems[0].dataIndex]?.toString(),
        },
      },
    },
  };

  return (
    <>
      <div>
        <Chart
          type="bar"
          data={data}
          options={options}
          style={{ height: "500px" }}
          onClick={handleClick}
          ref={chartRef}
        />
      </div>
    </>
  );
};

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
);

export default TimeChart;
