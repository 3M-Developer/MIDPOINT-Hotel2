import React from "react";
import RoomsHero from "./RoomsHero";
import Rooms from "./Rooms.jsx";

const MainRooms = () => {
  return (
    <>
      <div className="  bg-linear-to-b bg-[#BB8632]/5  text-third relative">
        <RoomsHero />
        <Rooms />
      </div>
    </>
  );
};

export default MainRooms;
