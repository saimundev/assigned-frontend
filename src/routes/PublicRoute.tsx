import { Navigate, Outlet } from "react-router";
const PublicRoute = () => {
  const isLogin = false;
  if (isLogin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
