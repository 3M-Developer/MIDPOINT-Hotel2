// hotelFacilities.js
import {
  FaConciergeBell,
  FaHandshake,
  FaUserTie,
  FaPlane,
  FaBus,
  FaCar,
  FaStore,
  FaSwimmer,
  FaHeart,
  FaBriefcase,
  FaCoffee,
  FaUtensils,
  FaGlassMartiniAlt,
  FaUsers,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const hotelFacilities = [
  { icon: FaConciergeBell, titleKey: "hotelFacilities.secretarial" },
  { icon: FaHandshake, titleKey: "hotelFacilities.meetGreet" },
  // { icon: FaUserTie, titleKey: "hotelFacilities.tourOffice" },

  // { icon: FaPlane, titleKey: "hotelFacilities.airlineOffice" },
  // { icon: FaBus, titleKey: "hotelFacilities.transportation" },
  // { icon: FaCar, titleKey: "hotelFacilities.rentCar" },

  // { icon: FaStore, titleKey: "hotelFacilities.souvenirShop" },
  // { icon: FaSwimmer, titleKey: "hotelFacilities.outdoorPool" },
  { icon: FaHeart, titleKey: "hotelFacilities.healthClub" },

  { icon: FaBriefcase, titleKey: "hotelFacilities.businessCenter" },
  { icon: FaCoffee, titleKey: "hotelFacilities.coffeeShop" },
  { icon: FaUtensils, titleKey: "hotelFacilities.restaurants" },

  // { icon: FaGlassMartiniAlt, titleKey: "hotelFacilities.bar" },
  { icon: FaUsers, titleKey: "hotelFacilities.meetingRooms" },
  { icon: GiPartyPopper , titleKey: "hotelFacilities.events" },
  { icon: FaCar , titleKey: "hotelFacilities.Valet" },
  
];
export default hotelFacilities;
