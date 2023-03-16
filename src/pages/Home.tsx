import { useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import useChartData from "../hooks/useChartData";

const Home = () => {
  const { chartDistrict } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();

  const district = searchParams.get("district");

  const handleClick = (value: string) =>
    setSearchParams(value == "" ? {} : { district: value });

  return (
    <>
      <Chart district={district} handleClick={handleClick} />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClick("")}
          className={`${district === null ? "btn-active" : "btn"}`}
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
