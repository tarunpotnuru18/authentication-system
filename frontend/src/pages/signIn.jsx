import { useContext, useState } from "react";
import { useStore } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { signIn } = useStore();
  let navigate = useNavigate();
  function reset() {
    setEmail("");
    setPassword("");
    setUsername("");
  }
  async function handleRequest() {
    try {
      let data = await signIn({
        email: email,
        password: password,
      });
      console.log(data)
      if (data.success === false) {
        return Promise.reject(new Error(data.message));
      }
      useStore.setState({ isLoggedIn: true, email });
      navigate("/authenticate-user");
      return data;
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGen() {
    toast.promise(handleRequest(), {
      loading: "signing in ...",
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
            <div className="text-white text-left text-xl">Sign in</div>
            <div className="text-gray-400 text-left">
              experience the secure authentication
            </div>
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
              signin
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
