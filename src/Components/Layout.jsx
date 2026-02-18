import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
 
import PixelScripts from "./PixelScript";

const Layout = () => {
  return (
    <>
    <ScrollRestoration />
    <PixelScripts/>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      
      <Footer />
    </>
  );
};

export default Layout;
