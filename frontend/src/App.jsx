import { useEffect, useState } from "react";
import { useStore } from "./store/store.js";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import {
  Signin,
  Signup,
  VerifyEmail,
  AuthenticateUser,
  Home,
  ForgotPassword,
  ResetPassword,
  DashBoard,
  PrivateAuthenticated,
  PrivateLoggedIn,
} from "./pages/index.js";
function App() {
  let { checkAuth, isAuthenticated, user } = useStore();
  let [loading, setLoading] = useState(true);

  async function authenticationCheck() {
    setLoading(true);
    let data = await checkAuth();
    if (data.success === false) {
      console.log("error");
      setLoading(false);
      return null;
    }
    console.log("here");
    useStore.setState({
      user: data.user,
      isAuthenticated: true,
      isLoggedIn: true,
    });
    setLoading(false);
    return;
  }
  useEffect(() => {
    authenticationCheck();
  }, []);

  if (loading) {
    return (
      <>
        <div>loading...</div>
      </>
    );
  }

  return (
    <>
      <div>
        <Toaster closeButton richColors />
      </div>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route
          path="/authenticate-user"
          element={
            <PrivateLoggedIn>
              <AuthenticateUser></AuthenticateUser>
            </PrivateLoggedIn>
          }
        ></Route>
        <Route
          path="/verify-email"
          element={
            <PrivateLoggedIn>
              <VerifyEmail></VerifyEmail>
            </PrivateLoggedIn>
          }
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/forgot-password"
          element={
            <PrivateAuthenticated>
              <ForgotPassword></ForgotPassword>
            </PrivateAuthenticated>
          }
        ></Route>
        <Route
          path="/reset-password/:token"
          element={
            <PrivateAuthenticated>
              <ResetPassword></ResetPassword>
            </PrivateAuthenticated>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateAuthenticated>
              <DashBoard></DashBoard>
            </PrivateAuthenticated>
          }
        ></Route>

        <Route
          path="*"
          element={
            <div className="text-white w-screen h-screen text-center bg-black">
              not a valid route
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
