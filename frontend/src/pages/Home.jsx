import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-black">
        <div className="w-full border-b-gray-300 border-b-[1px] flex items-center justify-between ">
          <div className=" p-[5px] font-hand text-[25px] text-amber-500">
            Authentication System <span className="text-[20px]">🛡️</span>
          </div>

          <div className="mr-[10px]">
            <Header></Header>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col">
          <div className="text-center w-full text-white">
            hey there welcome to the testing software for the auth api! we are
            pleased to have you here 💌
          </div>

          <div className="w-full   h-[50px] text-center py-2 px-[10px] text-white">
            made with ❤️ by <span className="text-red-500">tarun</span>
          </div>
        </div>
      </div>
    </>
  );
}
