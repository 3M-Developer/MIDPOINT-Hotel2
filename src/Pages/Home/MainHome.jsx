import React from "react";
import HeroSection from "./HeroSection";

import { StaticSection } from "./StaticSection";

import Challenges from "./Challenges";
import StaticSection2 from "./StaticSection2";
import GymSection from "./GymSection";
import RoomFacilities from "./RoomFacilities";
import CafeSection from "./CafeSection";
import HotelFacilities from './HotelFacilities';
import ConferenceHallSection from './ConferenceHallSection';

const MainHome = () => {
  return (
    <>
      <div>
        <HeroSection />

        <StaticSection2 />
        <GymSection />
        <StaticSection />
        <RoomFacilities />
        <CafeSection />
        <HotelFacilities/>
        <ConferenceHallSection/>
        {/* <Challenges /> */}
      </div>
    </>
  );
};

export default MainHome;
