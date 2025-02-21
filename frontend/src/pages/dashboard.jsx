import { useStore } from "../store/store.js";

export default function DashBoard() {
  let { user } = useStore();
  return (
    <>
      <div className="text-center text-white bg-black w-screen h-screen ">
        {user.email}
      </div>
    </>
  );
}
