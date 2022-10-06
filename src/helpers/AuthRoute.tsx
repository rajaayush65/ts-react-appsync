import { Navigate } from "react-router-dom";
import { useAppSelector } from "./redux-helpers";

export const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
