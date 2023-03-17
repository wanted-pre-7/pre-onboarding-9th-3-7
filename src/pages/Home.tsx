import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Btn from "../components/Btn";
import BtnWrapper from "../components/BtnWrapper";
import Chart from "../components/Chart";
import useChartData from "../hooks/useChartData";
export type Category = "전체" | "area" | "bar";
const CATEGORY: Category[] = ["전체", "area", "bar"];

const Home = () => {
  const { chartDistrict } = useChartData();
  const [searchParams, setSearchParams] = useSearchParams();
  const district = searchParams.get("district") as string;
  const category = searchParams.get("category") as Category;

  const handleClickDistrict = (district: string) => {
    setSearchParams({ category, district });
  };

  const handleClickCategory = (category: string) => {
    setSearchParams({
      category: category as Category,
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
      <BtnWrapper>
        {CATEGORY.map((item) => (
          <Btn
            left={item}
            right={category}
            key={item}
            onClick={handleClickCategory}
          >
            {item}
          </Btn>
        ))}
      </BtnWrapper>
      <Chart
        district={district}
        category={category}
        handleClickDistrict={handleClickDistrict}
        handleClickCategory={handleClickCategory}
      />
      <BtnWrapper>
        <Btn left={district} right="전체" onClick={handleClickDistrict}>
          전체
        </Btn>
        {chartDistrict.map((value) => (
          <Btn
            left={value}
            right={district}
            onClick={handleClickDistrict}
            key={value}
          >
            {value}
          </Btn>
        ))}
      </BtnWrapper>
    </>
  );
};
export default Home;
