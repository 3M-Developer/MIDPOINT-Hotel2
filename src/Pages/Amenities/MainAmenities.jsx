import React from 'react'
import HotelFacilities from './HotelFacilities.jsx';
import RoomFacilities from './RoomFacilities.jsx';
import HeroAmenities from './HeroAmenities';

const MainAmenities = () => {
  return (
    <>
    <HeroAmenities/>
    <HotelFacilities/>
    <RoomFacilities/>
    </>
  )
}

export default MainAmenities