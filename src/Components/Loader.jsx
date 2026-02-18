import React, { useContext } from "react";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";
import mainLogo from "../assets/logoWhite.webp";
// import { SettingsContext } from "../Context/SettingsContext";

const Loader = () => {
  //   const { mainLogo } = useContext(SettingsContext);

  return (
    <>
      <div className="fixed bg-green  inset-0 backdrop-blur-2xl z-[99999] flex items-center justify-center">
        <div className="w-100 flex flex-col justify-center items-center">
          <Lottie animationData={loader} loop={true} />
          <img src={mainLogo} className="w-80  " alt="" />
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/40 rounded-full blur-3xl  " />
        {/* <div className="absolute -top-24 -left-24 w-96 h-96 bg-third/10 rounded-full blur-3xl" /> */}
        <div className="absolute top-1/2 -right-50 w-[500px] h-[500px] bg-secondary/40 rounded-full blur-3xl" />
      </div>
    </>
  );
};

export default Loader;
