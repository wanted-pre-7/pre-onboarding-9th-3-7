import { RouterProvider } from "react-router-dom";
import router from "./Router";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
