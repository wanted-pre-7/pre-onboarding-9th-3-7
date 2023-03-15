import { useParams } from "react-router-dom";
import theme from "../theme";
import useData from "./useData";

const useHighlight = () => {
  const { id } = useParams();
  const { idList } = useData();

  const barBg = idList.map((el) =>
    el === id ? `${theme.blue}` : `${theme.grayBar}`,
  );
  const areaBg = idList.map((el) =>
    el === id ? `${theme.yellow}` : `${theme.grayArea}`,
  );
  const barBorder = idList.map((el) =>
    el === id ? `${theme.blueBorder}` : `${theme.grayBorder}`,
  );
  const areaBorder = idList.map((el) =>
    el === id ? `${theme.yellowBorder}` : `${theme.grayBorder}`,
  );

  return { barBg, areaBg, barBorder, areaBorder };
};

export default useHighlight;
