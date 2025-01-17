import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "./auth-provider";

export const PrivateRouteWrapper = () => {
  const { isLogged } = useAuthContext();

  if (isLogged) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
