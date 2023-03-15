import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Navigate to="/main" replace />,
      },
      {
        path: "/main",
        element: <App />,
      },
      {
        path: "*",
        element: <Navigate to="/main" replace />,
      },
    ],
  },
]);

export default router;
