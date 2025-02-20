import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { toast } from "sonner";
import { useStore } from "../store/store.js";

import { useState } from "react";
export default function VerifyEmail() {
  let [value, setValue] = useState(undefined);
  let { user, verifyEmail } = useStore();
  console.log(useStore.getState())
  async function handleRequest() {
    try {
      let data = await verifyEmail({ token:value, email: user.email });
      if (!data.success) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.log(error)
      return Promise.reject(new Error(error.message));
    }
  }

  function toastGenerator() {
    toast.promise(handleRequest(), {
      loading: "verifying....",
      success: () => {
        return "sucessfully verified";
      },
      error: (err) => {
        return err.message;
      },
    });
  }

  return (
    <div className="h-screen w-screen flex bg-black justify-center items-center flex-col">
      {" "}
      <h2 className="text-white font-bold text-[30px] mb-[30px]">
        verify email
      </h2>
      <div className="text-white mb-[20px]">
       { `please enter otp sent to your email (${user?.email})`}
      </div>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-white my-[15px]">
        {value && `you have entered ${value}`}
      </div>
      <button
        className="text-black p-[4px] rounded-md bg-white font-sans"
        onClick={() => {
          toastGenerator();
        }}
      >
        submit
      </button>
    </div>
  );
}
