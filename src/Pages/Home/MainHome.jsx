import React from "react";
import HeroSection from "./HeroSection";

import { StaticSection } from "./StaticSection";

import Challenges from "./Challenges";
import StaticSection2 from './StaticSection2';
import GymSection from './GymSection';
import RoomFacilities from './RoomFacilities';

const MainHome = () => {
  return (
    <>
      <div>
        <HeroSection />


        <StaticSection2/>
        <GymSection/>
        <StaticSection />
        <RoomFacilities/>
        {/* <Challenges /> */}


      </div>
    </>
  );
};

export default MainHome;
