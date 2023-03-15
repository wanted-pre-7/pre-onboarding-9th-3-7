import { useNavigate, useParams } from "react-router-dom";
import { chartIdArr } from "../api/chartData";

const Buttons = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      {chartIdArr.map((el, idx) => (
        <button
          key={idx}
          style={{ backgroundColor: id === el ? "gray" : undefined }}
          onClick={() => navigate("/" + el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
