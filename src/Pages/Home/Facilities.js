import {
  FaSnowflake,
  FaLock,
  FaPhoneAlt,
  FaTv,
  FaCocktail,
  FaConciergeBell,
  FaSoap,
  FaWheelchair,
  FaSmokingBan,
  FaCoffee,
  FaWeight,
} from "react-icons/fa";
import { MdIron } from "react-icons/md";

const facilities = [
  {
    icon: FaSnowflake,
    titleKey: "facilities.airConditioning",
  },
  {
    icon: FaLock,
    titleKey: "facilities.safeDepositBox",
  },
  {
    icon: FaPhoneAlt,
    titleKey: "facilities.telephone",
  },
  {
    icon: FaTv,
    titleKey: "facilities.lcdTv",
  },
  {
    icon: FaCocktail,
    titleKey: "facilities.miniBar",
  },
  {
    icon: FaConciergeBell,
    titleKey: "facilities.roomService",
  },
  {
    icon: FaSoap,
    titleKey: "facilities.laundryService",
  },
  {
    icon: FaWheelchair,
    titleKey: "facilities.wheelchairAccess",
  },
  {
    icon: FaSmokingBan,
    titleKey: "facilities.nonSmokingRooms",
  },
  {
    icon: FaCoffee,
    titleKey: "facilities.kettleNespresso",
  },
  {
    icon: FaWeight,
    titleKey: "facilities.weightScale",
  },
  {
    icon: MdIron,
    titleKey: "facilities.ironBoard",
    subKey: "facilities.uponRequest", // optional
  },
];
export default facilities;
