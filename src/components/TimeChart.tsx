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
import { Chart } from "react-chartjs-2";
import useData from "../hooks/useData";

const TimeChart = () => {
  const { labels, areaData, barData } = useData();
  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "value_area",
        backgroudColor: "gray",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
        tension: 0.5,
        order: 1,
        data: areaData,
      },
      {
        type: "bar" as const,
        label: "value_bar",
        backgroudColor: "gray",
        borderColor: "black",
        borderWidth: 1,
        order: 2,
        data: barData,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Chart
        type="bar"
        data={data}
        options={options}
        style={{ height: "500px" }}
      />
    </div>
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
