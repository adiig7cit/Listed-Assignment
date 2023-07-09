import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [check, setCheck] = useState(true);
 
  //  check if the user is logged in. if the user
  //  is logged in then only show the home page
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  if (!authenticated && !check) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="flex flex-col w-full sm:flex-row justify-between gap-4 lg:gap-6 px-2 sm:px-4 py-4 bg-[#F5F5F5]">
        <SideBar />
        <Hero />
      </div>
    );
  }
};

export default Home;


  // aditya gupta
