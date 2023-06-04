import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages/auth";
import { Dashboard } from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }, {
    path: "/dashboard",
    element:<Dashboard/>
  }
]);

export default router;
