import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
 
 

const Layout = () => {
  return (
    <>
    <ScrollRestoration />
    
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
};

export default Layout;
