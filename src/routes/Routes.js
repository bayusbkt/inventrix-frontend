import { Navigate, useRoutes } from "react-router-dom";
import { DashboardAdmin } from "../views/dahboard-admin/DashboardAdmin";
import { Login } from "../views/Login";
import { NotFound } from "../views/NotFound";
import { Layout } from "../layout/Layout";
import { DashboardUser } from "../views/DashboardUser";
import { DataPeminjaman } from "../views/data-peminjaman/DataPeminjaman";
import { ManajemenBarang } from "../views/manajemen-barang/ManajemenBarang";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { role } = useAuth();
  const token = Cookies.get("connect.sid");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

const router = (props) => [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <DashboardAdmin />,
      },
      {
        path: "/data-peminjaman",
        element: <DataPeminjaman />,
      },
      {
        path: "/manajemen-barang",
        element: <ManajemenBarang />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Routes = (props) => {
  const routers = router(props);
  let routes = useRoutes(routers);
  return routes;
};
