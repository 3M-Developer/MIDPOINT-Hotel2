import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { ApiAuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import RoomCard from "../../Components/RoomCard";
import Loader from "../../Components/Loader";
import rooms from "./rooms";
import { motion } from "framer-motion";

const Rooms = () => {
  // const [items, setItems] = useState(null);
  const { t, i18n } = useTranslation();
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // const { baseUrl, XApiKey, XTenantID, defaultLang } =
  //   useContext(ApiAuthContext);

  // function DecodedText({ text }) {
  //   const safeText = typeof text === "string" ? text : "";
  //   const decodedHtml = he.decode(safeText);

  //   const truncatedHtml =
  //     decodedHtml.length > 250
  //       ? decodedHtml.slice(0, 250) + "..."
  //       : decodedHtml;

  //   return <span dangerouslySetInnerHTML={{ __html: truncatedHtml }} />;
  // }
  // const lang = i18n.language;

  // async function getItems() {
  //   const response = await axios.get(`${baseUrl}/items`, {
  //     headers: {
  //       "X-API-KEY": XApiKey,
  //       "X-Tenant-ID": XTenantID,
  //     },
  //   });
  //   return response.data.data.items.data;
  // }

  // let { data, isError, error, isLoading, isFetching } = useQuery({
  //   queryKey: ["Items"],
  //   queryFn: getItems,
  // });

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);

  //     setItems(data);
  //   }
  // }, [data]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    // <div className="px-5">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
    //     {rooms?.map((room) => (
    //       <RoomCard item={room} />
    //     ))}
    //   </div>
    // </div>
    <div className="pt-3 pb-24">
      {/* Page Header */}
     

      {/* Rooms */}
      <motion.div
        className="space-y-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {rooms.map((room) => (
          <motion.div key={room.id} variants={itemVariants}>
            <RoomCard room={room} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Rooms;
