import { useStore } from "@/store/store";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Header() {
  let { user, isAuthenticated, isLoggedIn, logOut } = useStore();
  let navigate = useNavigate();
  async function handleLogout() {
    try {
      let data = await logOut();
      if (data.success === false) {
        return Promise.reject(new Error("logout failed"));
      }
      navigate("/signin");
      return data;
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGenerator() {
    toast.promise(handleLogout(), {
      loading: "logging out ....",
      success: "logout successful",
      error: (err) => {
        return "logout failed";
      },
    });
  }

  if (isLoggedIn && isAuthenticated) {
    return (
      <div>
        <button
          className="bg-white text-black p-[4px] hover:cursor-pointer "
          onClick={() => {
            toastGenerator();
          }}
        >
          logout
        </button>

        <button className="bg-white text-black p-[4px] hover:cursor-pointer ">
          <Link to={"/forgot-password"}>forgot Password</Link>
        </button>
      </div>
    );
  }
  return (
    <>
      <div>
        <button className="bg-white text-black p-[4px]">
          <Link to={"/signup"}>signup</Link>
        </button>
        <button className="bg-white text-black p-[4px]">
          <Link to={"/signin"}>signin</Link>
        </button>
      </div>
    </>
  );
}
