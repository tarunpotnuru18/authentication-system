import { useContext, useState } from "react";
import { useStore } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export default function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let { Signup } = useStore();
 let navigate = useNavigate()
  async function handleClick() {
    
    let data = await Signup;
    if (data.success === false) {
      return Promise.reject(new Error(data.message));
    }
     
    return data
  }

function toastGen(){
    toast.promise(handleClick(),{
        loading:"loading",
        success: "successful",
        error:"failed bro"
    })
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
              value={username}
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
              "signup"
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
