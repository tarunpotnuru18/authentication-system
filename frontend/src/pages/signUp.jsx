import { useContext, useState } from "react";
import { useStore } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PasswordCheck from "@/components/passwordCheck.jsx";
export default function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userName, setUsername] = useState("");
  let { signUp } = useStore();
  let navigate = useNavigate();
  function reset() {
    setEmail("");
    setPassword("");
    setUsername("");
  }
  async function handleRequest() {
    try {
      let data = await signUp({
        userName: userName,
        email: email,
        password: password,
      });
      if (data.success === false) {
        return Promise.reject(new Error(data.message));
      }
      useStore.setState({ isLoggedIn: true, isAuthenticated: true });
      navigate("/verify-email");
      return data;
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGen() {
    toast.promise(handleRequest(), {
      loading: "loading",
      success: "successfull",
      error: (err) => {
        console.log(err);
        return err.message;
      },
    });
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className=" rounded-sm flex flex-col justify-center p-5 gap-3">
          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white text-left text-xl">Sign up</div>
            <div className="text-gray-400 text-left">
              experience the secure authentication
            </div>
          </div>

          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white">username</div>
            <input
              type="text"
              placeholder="enter your username"
              value={userName}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="border-b-[1.5px] border-gray-600 p-2 outline-none bg-transparent text-white  focus:border-white"
            />
          </div>

          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white">email</div>
            <input
              type="text"
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-b-[1.5px] border-gray-600 p-2 outline-none bg-transparent text-white  focus:border-white"
            />
          </div>

          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white">Password</div>
            <input
              type="text"
              placeholder="enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-b-[1.5px] border-gray-600 p-2 outline-none bg-transparent text-white  focus:border-white"
            />
          </div>
          <div className="text-center text-black flex items-center justify-center w-full">
            <button
              className="bg-white rounded py-1 px-2 text-center  hover:bg-gray-200 flex justify-center items-center min-h-[32px] min-w-[80px]"
              onClick={() => {
                toastGen();
              }}
            >
              signup
            </button>
          </div>
        </div>
          <PasswordCheck password={password}></PasswordCheck>
      </div>
    </>
  );
}
