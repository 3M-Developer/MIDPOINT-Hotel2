import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import MainHome from "./Pages/Home/MainHome";
import MainAbout from "./Pages/About/MainAbout";
import MainContact from "./Pages/Contact/MainContact";
import MainRooms from "./Pages/Rooms/MainRooms";
import RoomsDetails from "./Pages/RoomsDetails/RoomsDetails";
import { Helmet } from "react-helmet";
import { SettingsContext } from "./Context/SettingsContext";
import MainBLogs from "./Pages/BLogs/MainBLogs";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Social from "./Pages/Social/Social";
import "swiper/css/pagination";
import NotFound from "./Pages/NotFound/NotFound";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Pages/Terms/Terms";
import Loader from "./Components/Loader";
import MainAmenities from "./Pages/Amenities/MainAmenities";

function App() {
  const { favicon } = useContext(SettingsContext);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="loader ">
  //       <Loader />
  //     </div>
  //   );
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainHome /> },
        { path: "/about", element: <MainAbout /> },
        { path: "/rooms", element: <MainRooms /> },
        { path: "/amenities", element: <MainAmenities /> },
        // { path: "/contact", element: <MainContact /> },
        // { path: "/rooms/:slug", element: <RoomsDetails /> },
        // { path: "/blogs", element: <MainBLogs /> },
        // { path: "/blogs/:slug", element: <BlogDetails /> },
        // { path: "/social", element: <Social /> },
        // { path: "/privacy-policy", element: <PrivacyPolicy /> },
        // { path: "/terms", element: <Terms /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    

      <RouterProvider router={router} />
    </>
  );
}

export default App;
