import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/main" element={<Home />} />
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="*" element={<Navigate to="/main" />} />
    </>,
  ),
);

export default App;
