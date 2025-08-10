import { Navigate, Outlet } from "react-router";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const token = true;
  const role = "admin";

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role || "")) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
