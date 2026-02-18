import room1 from "../../assets/rooms/Premium luxary - Executive.webp";
import room2 from "../../assets/rooms/Junior Luxury Suite.webp";
import room3 from "../../assets/rooms/Premium luxary - Executive.webp";
import { FaConciergeBell, FaWifi } from "react-icons/fa";

import { MdAcUnit, MdCoffeeMaker, MdKingBed, MdKitchen } from "react-icons/md";
import { FaHotTub } from "react-icons/fa";
import { MdSettingsInputComponent } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { BsTvFill } from "react-icons/bs";
import { CgSmartHomeLight } from "react-icons/cg";

const rooms = [
  {
    id: 1,
    seriesKey: "rooms.series.luxury",
    titleKey: "rooms.premium.title",
    descKey: "rooms.premium.description",
    size: "45m²",
    featureKey: "rooms.premium.feature",
    image: room1,
    reverse: false,
    amenities: [
      { icon: FaWifi, labelKey: "amenities.fastWifi" },
      { icon: MdKingBed, labelKey: "amenities.kingBed" },
      { icon: FaHotTub, labelKey: "amenities.jacuzzi" },
      { icon: MdSettingsInputComponent, labelKey: "amenities.smartRoom" },
    ],
  },
  {
    id: 2,
    seriesKey: "rooms.series.suite",
    titleKey: "rooms.junior.title",
    descKey: "rooms.junior.description",
    size: "65m²",
    featureKey: "rooms.junior.feature",
    image: room2,
    reverse: true,
    amenities: [
      { icon: FaWifi, labelKey: "amenities.freeWifi" },
      { icon: BiSolidDrink, labelKey: "amenities.miniBar" },
      { icon: MdCoffeeMaker, labelKey: "amenities.nespresso" },
      { icon: MdAcUnit, labelKey: "amenities.climate" },
    ],
  },
  {
    id: 3,
    seriesKey: "rooms.series.pinnacle",
    titleKey: "rooms.executive.title",
    descKey: "rooms.executive.description",
    size: "120m²",
    featureKey: "rooms.executive.feature",
    image: room3,
    reverse: false,
    amenities: [
      { icon: FaConciergeBell, labelKey: "amenities.butler" },
      { icon: MdKitchen , labelKey: "amenities.kitchenette" },
      { icon: BsTvFill , labelKey: "amenities.mediaRoom" },
      { icon: CgSmartHomeLight, labelKey: "amenities.smartTech" },
    ],
  },
];
export default rooms;
// const rooms = [
//   {
//     id: 1,
//     slug: "premium-luxury-room",
//     image: room1,
//     en: {
//       name: "Premium Luxury Room",
//       size_m2: 40,
//       view: "City View",
//       description:
//         "A spacious and well-designed one-bedroom room featuring a king size bed, a bathroom with combined bathtub and shower, and modern smart controls.",
//       amenities: [
//         "King size bed",
//         "Bathroom with bathtub and shower",
//         "Free Wi-Fi",
//         "1 Flat screen TV",
//         "Individually adjustable air-conditioning",
//         "Mini fridge",
//         "Water heater",
//         "Table with 2 chairs",
//         "Telephone extension",
//         "Safe box",
//         "Coffee kettle",
//         "Smart-controlled curtains and lighting"
//       ]
//     },
//     ar: {
//       name: "غرفة بريميوم الفاخرة",
//       size_m2: 40,
//       view: "إطلالة على المدينة",
//       description:
//         "غرفة راقية التصميم والتأثيث، فسيحة ومريحة، تحتوي على سرير مزدوج فاخر وحمام متكامل مع نظام تحكم ذكي.",
//       amenities: [
//         "سرير كنج أو توين",
//         "حمام فاخر يشمل حوض استحمام ودش",
//         "واي فاي وإنترنت لا سلكي",
//         "شاشة تلفزيون مسطحة واحدة",
//         "تكييف هواء قابل للتعديل بشكل فردي",
//         "ثلاجة صغيرة",
//         "سخان مياه",
//         "طاولة مع كرسيين",
//         "خط هاتف",
//         "خزينة",
//         "سجاد فاخر",
//         "ستائر وإضاءة تعمل بالتحكم الذكي"
//       ]
//     }
//   },
//   {
//     id: 2,
//     slug: "junior-luxury-suite",
//     image: room2,
//     en: {
//       name: "Junior Luxury Suite",
//       size_m2: 63,
//       view: "City View",
//       description:
//         "An elegant one-bedroom suite with a separate seating area, offering comfort, privacy, and smart-controlled features.",
//       amenities: [
//         "King or twin size bed",
//         "Full ceramic bathroom with bathtub and shower",
//         "Free Wi-Fi",
//         "2 Flat screen TVs",
//         "Individually adjustable air-conditioning",
//         "Mini fridge",
//         "Water heater",
//         "Sitting area",
//         "Dining table with 2 chairs",
//         "Telephone extension",
//         "Safe box",
//         "Smart-controlled curtains and lighting"
//       ]
//     },
//     ar: {
//       name: "جناح جونير فاخر",
//       size_m2: 63,
//       view: "إطلالة على المدينة",
//       description:
//         "جناح أنيق وفسيح يتكون من غرفة نوم وصالة جلوس راقية مع تجهيزات عصرية وتحكم ذكي.",
//       amenities: [
//         "سرير كنج أو توين",
//         "حمام من السيراميك الكامل يشمل حوض استحمام ودش",
//         "واي فاي وإنترنت لا سلكي",
//         "شاشتان تلفزيون مسطحتان",
//         "تكييف هواء قابل للتعديل بشكل فردي",
//         "ثلاجة صغيرة",
//         "سخان مياه",
//         "منطقة جلوس أنيقة",
//         "طاولة طعام مع كرسيين",
//         "خط هاتف",
//         "خزينة",
//         "ستائر وإضاءة تعمل بالتحكم الذكي"
//       ]
//     }
//   },
//   {
//     id: 3,
//     slug: "executive-suite",
//     image: room3,
//     en: {
//       name: "Executive Suite",
//       size_m2: 74,
//       view: "City View",
//       description:
//         "A luxurious executive suite designed for premium comfort, featuring a jacuzzi room and elegant living space.",
//       amenities: [
//         "King size bed",
//         "Full ceramic bathroom with bathtub and shower",
//         "Jacuzzi room",
//         "Free Wi-Fi",
//         "2 Flat screen TVs",
//         "Individually adjustable air-conditioning",
//         "Mini fridge",
//         "Water heater",
//         "Dining table with chairs",
//         "Sitting area",
//         "Telephone extension",
//         "Safe box",
//         "Luxury carpet",
//         "Smart-controlled curtains and lighting"
//       ]
//     },
//     ar: {
//       name: "الجناح التنفيذي الفاخر",
//       size_m2: 74,
//       view: "إطلالة على المدينة",
//       description:
//         "جناح تنفيذي فاخر وواسع يضم غرفة نوم وصالون راقٍ مع غرفة جاكوزي وتجهيزات عالية المستوى.",
//       amenities: [
//         "سرير كنج فاخر",
//         "حمام من السيراميك الكامل يشمل حوض استحمام ودش",
//         "غرفة جاكوزي",
//         "واي فاي وإنترنت لا سلكي",
//         "شاشتان تلفزيون مسطحتان",
//         "تكييف هواء قابل للتعديل بشكل فردي",
//         "ثلاجة صغيرة",
//         "سخان مياه",
//         "طاولة طعام مع كراسي ومكتبة",
//         "منطقة جلوس راقية",
//         "خط هاتف",
//         "خزينة",
//         "سجاد فاخر",
//         "ستائر وإضاءة تعمل بالتحكم الذكي"
//       ]
//     }
//   }
// ];
