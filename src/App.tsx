import React, { useState } from "react";
import Chart from "./components/Chart";
import Header from "./components/Header";
import useChartData from "./hooks/useChartData";

const App = () => {
  const { chartDistrict } = useChartData();
  const [district, setDistrict] = useState("");

  const handleClick = (value: string) => setDistrict(value);

  return (
    <div className="App">
      <Header />

      <Chart district={district} handleClick={handleClick} />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClick("")}
          className={`${district === "" ? "btn-active" : "btn"}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) => handleClick(e.currentTarget.textContent as string)}
            className={`${value === district ? "btn-active" : "btn"}`}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
