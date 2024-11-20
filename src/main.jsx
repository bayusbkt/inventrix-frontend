import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import DashboardUser from "./views/DashboardUser.jsx";
import DashboardAdmin from "./views/DashboardAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard-user",
    element: <DashboardUser />,
  },
  {
    path: "/dashboard-admin",
    element: <DashboardAdmin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
