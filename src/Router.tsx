import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Navigate to="/chart" replace />,
      },
      {
        path: "/chart",
        element: <App />,
      },
      {
        path: "/:id",
        element: <App />,
      },
      {
        path: "*",
        element: <Navigate to="/chart" replace />,
      },
    ],
  },
]);

export default router;
