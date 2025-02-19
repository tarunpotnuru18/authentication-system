import { useEffect, useState } from "react";
import "./App.css";
import { useStore } from "./store/store.js";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signUp.jsx";
import { Toaster } from "@/components/ui/sonner"
function App() {
  let { checkAuth, isAuthenticated } = useStore();
  let [loading, setLoading] = useState(null);

  async function handle() {
    setLoading(true);
    let data = await checkAuth();
    if (data.success === false) {
      setLoading(false);
      return null;
    }
    useStore.setState({ user: data.user, isAuthenticated: true });
    console.log(isAuthenticated, "here");
    setLoading(false);
  }
  useEffect(() => {
    handle();
  }, []);

  if (loading) {
    return (
      <>
        <div>loading</div>
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
      </Routes>
    </>
  );
}

export default App;
