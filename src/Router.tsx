import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/chart" replace />,
      },
      {
        path: "/chart",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Home />,
      },
      {
        path: "*",
        element: <Navigate to="/chart" replace />,
      },
    ],
  },
]);

export default router;
