import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.webp"
import { IoHome } from "react-icons/io5";

const NotFound = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-40 py-12 md:py-20 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          {/* Content Side */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex text-red-900 items-center justify-center md:justify-start gap-2    font-semibold text-sm uppercase tracking-wider">
              <span className=" text-lg">
                <MdErrorOutline />
              </span>
              <span>Error 404</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-third  leading-[1.1]">
              Lost in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-third to-[#4a4592]    ">
                Digital Ether
              </span>
            </h1>
            <p className="text-lg text-third/70 /70 max-w-[500px] mx-auto md:mx-0 font-medium leading-relaxed">
              We can't market a page that doesn't exist. The content you're
              looking for might have moved, or the link is broken.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
              <Link
                to="/"
                className="flex  items-center justify-center gap-2 rounded-lg h-12 px-6 bg-secondary text-primary hover:bg-secondary/10 hover:text-third transition-all shadow-lg shadow-secondary/20  font-bold"
              >
                <span className="  text-sm"><IoHome size={20} /></span>
                <span>Go to Home Page</span>
              </Link>
              
            </div>
          </div>
          {/* Visual Side */}
          <div className="flex-1 w-full max-w-[500px] aspect-square relative order-1 md:order-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#f1f1f4] to-[#e6e6e9]  flex items-center justify-center">
              {/* Abstract 404 Illustration placeholder */}
               <div
                className="relative z-10 w-full h-full bg-cover bg-center"
                data-alt="Abstract geometric shapes floating in a dark blue void representing data loss"
                style={{
                  backgroundImage:
                    `url(${notFound})`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[120px] md:text-[180px] font-black text-third mix-blend-overlay opacity-80 tracking-tighter">
                  404
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
