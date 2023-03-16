import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import Header from "../components/Header";
import useChartData from "../hooks/useChartData";

const Home = () => {
  const { chartDistrict } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const district = searchParams.get("district");
  const category = searchParams.get("category");

  const handleClick = (value: string) => {
    category === null
      ? setSearchParams({ district: value })
      : setSearchParams({ district: value, category: category });
  };

  return (
    <>
      <Header />
      <Chart handleClick={handleClick} />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClick("")}
          className={`${
            district === null || district === "" ? "btn-active" : "btn"
          }`}
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
    </>
  );
};
export default Home;
