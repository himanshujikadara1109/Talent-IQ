import { useUser, useAuth } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";
import {useEffect} from "react";
import axiosInstance from "./lib/axios.js";

function App() {
  // const { isSignedIn, isLoaded } = useUser();
    const { isSignedIn, isLoaded, getToken } = useAuth();

    useEffect(() => {
        const syncUser = async () => {
            if (!isSignedIn) return;

            const token = await getToken();
            console.log('token', token);

            // await fetch("/api/me", {
            //     method: "POST",
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });
            const res = await axiosInstance.post("/me", null,{headers: {
                    Authorization: `Bearer ${token}`
                }});
            console.log("res", res);
        };

        syncUser();
    }, [isSignedIn]);

  // this will get rid of the flickering effect
  if (!isLoaded) return null;



  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
