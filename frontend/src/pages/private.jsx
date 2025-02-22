import { useStore } from "../store/store";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
export function PrivateLoggedIn({ children }) {
  let { user, isAuthenticated, isLoggedIn } = useStore();

  if (isLoggedIn === true && isAuthenticated === false) {
    return <>{children}</>;
  }
  if (isLoggedIn && isAuthenticated === true) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/signup" replace />;
}

export function PrivateAuthenticated({ children }) {
  let { user, isAuthenticated, isLoggedIn } = useStore();

  if (isLoggedIn === true && isAuthenticated === true) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" replace />;
}
