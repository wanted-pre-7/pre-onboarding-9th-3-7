import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChartView from "./page/ChartView";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/기본"} />}></Route>
          <Route path="/:id" element={<ChartView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
