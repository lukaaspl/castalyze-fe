import { Navigate, Outlet } from "react-router";

export const PrivateRouteWrapper = () => {
  const isLogged = true;

  if (isLogged) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
