import { useState } from "react";
import { useStore } from "../store/store.js";
import { toast } from "sonner";
export default function ForgotPassword() {
  let { forgotPassword } = useStore();
  let [email, setEmail] = useState("");
  async function handleRequest() {
    try {
      let data = await forgotPassword({ email });
      if (data.success === false) {
        return Promise.reject(new Error("operation failed"));
      }
      return data;
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGenerator() {
    toast.promise(handleRequest(), {
      loading: "loading ....",
      success: "authentication email sent",
      error: (err) => {
        console.log(err)
        return "email sending failed";
      },
    });
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className=" rounded-sm flex flex-col justify-center p-5 gap-3">
          <div className="inline-flex flex-col gap-[3px]">
            <div className="text-white text-left text-xl">ForgotPassword</div>
            <div className="text-white text-left ">
              {"please enter your email"}
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

          <div className="text-center text-black">
            <button
              className="bg-white rounded py-1 px-2 text-center text-[10] hover:bg-gray-200"
              onClick={() => {
                toastGenerator();
              }}
            >
              send reset email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
