import { useParams } from "react-router-dom";
import { useStore } from "../store/store.js";
import { toast } from "sonner";
import { useState } from "react";

export default function ResetPassword() {
  let { token } = useParams();
  let { resetPassword, user, email } = useStore();
  let [password, setPassword] = useState("");
  let [newpassword,setNewPassword]= useState("");
  let [completed,isCompleted] = useState(false)
  async function handleRequest() {
    try {
      let data = await resetPassword({ email:user.email, token, password });
      if (data.success === false) {
        return Promise.reject(new Error("reset failed"));
      }
      
      return data

    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGenerator(){
    toast.promise(handleRequest(), {
        loading: "loading ....",
        success: "sucessful",
        error: (err) => {
          console.log(err)
          return "failed";
        },
      })
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className=" rounded-sm flex flex-col justify-center p-5 gap-3">
          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white text-left text-xl">changePassword</div>
            <div className="text-white text-left ">
              {"please enter your new password" + user.userName}
            </div>
          </div>

          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white">password</div>
            <input
              type="text"
              placeholder="enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-b-[1.5px] border-gray-600 p-2 outline-none bg-transparent text-white  focus:border-white"
            />
            <input
              type="text"
              placeholder="enter your password again"
              value={newpassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              className="border-b-[1.5px] border-gray-600 p-2 outline-none bg-transparent text-white  focus:border-white"
            />
          </div>

          <div className="text-center text-black">
            <button
              className="bg-white rounded py-1 px-2 text-center text-[10] hover:bg-gray-200"
              onClick={() => {
                toastGenerator();
              }}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );

   
}


