import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Chart from "../components/Chart";
import useChartData from "../hooks/useChartData";
type Category = "전체" | "area" | "bar";
const CATEGORY: Category[] = ["전체", "area", "bar"];

const Home = () => {
  const { chartDistrict } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();

  const district = searchParams.get("district") as string;
  const category = searchParams.get("category") as Category;

  const handleClickDistrict = (value: string) => {
    setSearchParams({ category, district: value });
  };

  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchParams({
      category: e.currentTarget.textContent as Category,
      district,
    });
  };

  useEffect(() => {
    if (!district && !category) {
      searchParams.set("category", "전체");
      searchParams.set("district", "전체");
    }
  }, []);

  return (
    <>
      <div className="btn-wrapper">
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
      <Chart
        district={district}
        category={category}
        handleClickDistrict={handleClickDistrict}
      />
      <div className="btn-wrapper">
        <button
          onClick={() => handleClickDistrict("전체")}
          className={`${district === "전체" ? "btn-active" : "btn"}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) =>
              handleClickDistrict(e.currentTarget.textContent as string)
            }
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
