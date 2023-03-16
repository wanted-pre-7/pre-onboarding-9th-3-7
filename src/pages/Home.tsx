import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import getChartData from "../utils/getChartData";

const Home = () => {
  const { chartDistrict } = getChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const handleClick = (value: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("id", value);
      return searchParams;
    });
  };

  return (
    <>
      <Chart district={id} handleClick={handleClick} />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClick("전체")}
          className={`${id === "전체" ? "btn-active" : "btn"}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) => handleClick(e.currentTarget.textContent as string)}
            className={`${value === id ? "btn-active" : "btn"}`}
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
