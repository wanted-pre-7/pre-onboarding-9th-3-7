import { Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import router from "./router";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
