import { useNavigate, useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import Header from "../components/Header";
import useChartData from "../hooks/useChartData";

const Home = () => {
  const { chartDistrict } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentParams = searchParams.get("id");

  const handleClick = (clickedId: string) => {
    if (clickedId) setSearchParams({ id: clickedId });
  };

  return (
    <>
      <Header />
      <Chart district={currentParams} handleClick={handleClick} />
      <div className="btn-wrapper">
        <button
          onClick={() => navigate("/chart")}
          className={`${currentParams === null ? "btn-active" : "btn"}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) => handleClick(e.currentTarget.textContent as string)}
            className={`${value === currentParams ? "btn-active" : "btn"}`}
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
