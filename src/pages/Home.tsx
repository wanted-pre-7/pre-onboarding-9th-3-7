import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import Header from "../components/Header";
import useChartData from "../hooks/useChartData";

type Category = "area" | "bar";
const CATEGORY: Category[] = ["area", "bar"];

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

  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    district === null
      ? setSearchParams({ category: e.currentTarget.textContent as Category })
      : setSearchParams({
          district: district,
          category: e.currentTarget.textContent as Category,
        });
  };

  return (
    <>
      <Header />
      <div className="btn-wrapper">
        <button
          className={`${
            category === null || category === "전체" ? "btn-active" : "btn"
          }`}
          onClick={handleClickCategory}
        >
          전체
        </button>
        {CATEGORY.map((item) => (
          <button
            className={`${item === category ? "btn-active" : "btn"}`}
            key={item}
            onClick={handleClickCategory}
          >
            {item}
          </button>
        ))}
      </div>
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
