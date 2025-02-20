import { useStore } from "../store/store";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
export function PrivateLoggedIn({ children }) {
  let { user, isAuthenticated, isLoggedIn } = useStore();

  useEffect(() => {
    if (isLoggedIn && user?.isVerified === true) {
      toast.error("already verified");
    }
    if (!isLoggedIn) {
      toast.error("unauthorized");
    }
  }, [isLoggedIn, user?.isVerified]);

  if (isLoggedIn && user?.isVerified === false) {
    return <>{children}</>;
  }
  if (isLoggedIn && user?.isVerified === true) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/signup" replace />;
}

export function PrivateAuthenticated({ children }) {
  let { user, isAuthenticated, isLoggedIn } = useStore();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("please login!");
    }
    if (!isAuthenticated) {
      toast.error("unauthorized");
    }
  }, [isAuthenticated, isLoggedIn]);

  if (isLoggedIn === true && isAuthenticated === true) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" replace />;
}
