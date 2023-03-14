import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";

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
      <Route path="/" element={<Main />} />
    </>,
  ),
);

export default App;
