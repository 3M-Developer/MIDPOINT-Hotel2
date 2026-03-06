import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ApiAuthContext } from "./AuthContext";
export const SettingsContext = createContext(0);

export default function SettingsContextProvider({ children }) {
  const [siteName_ar, setSiteName_ar] = useState("");
  const [siteName_en, setSiteName_en] = useState("");
  const [siteEmail, setSiteEmail] = useState("");
  const [sitePhone, setSitePhone] = useState("");
  const [mainLogo, setMainLogo] = useState("");
  const [footerLogo, setFooterLogo] = useState("");
  const [favicon, setFavicon] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [darkMainColor, setDarkMainColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [thirdColor, setThirdColor] = useState("");

  const [darkSecondaryColor, setDarkSecondaryColor] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [snapchatLink, setSnapchatLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [address_en, setAddress_en] = useState(
    "King Fahad Rd, Al Nuzhah, Abha 62521, Saudi Arabia",
  );
  const [address_ar, setAddress_ar] = useState(
    "طريق الملك فهد، النزهة، أبها 62521، المملكة العربية السعودية",
  );
  const [footerText_en, setFooterText_en] = useState("");
  const [footerText_ar, setFooterText_ar] = useState("");
  const currency = "$";
  const [enableDarkMode, setEnableDarkMode] = useState("");

  const [isCustomBanner, setIsCustomBanner] = useState("");
  const [CustomBannerEn, setCustomBannerEn] = useState("");
  const [CustomBannerAr, setCustomBannerAr] = useState("");
  const [CustomTextEn, setCustomTextEn] = useState("");
  const [CustomTextAr, setCustomTextAr] = useState("");

  useEffect(() => {
    setSiteName_ar("فندق ميدبوينت");
    setSiteName_en("MIDPOINT Hotel");
    setSiteEmail("Info@midpointhotel.sa");
    setSitePhone("+9668004300070");
    // setMainLogo(data.main_logo_light);
    // setFooterLogo(data.main_logo_light);
    // setFavicon(data.favicon);
    // setFacebookLink(data.facebook);
    setInstagramLink("https://www.instagram.com/midpoint377");
    setSnapchatLink("https://www.snapchat.com/add/mid_point26");
    //   setLinkedinLink(data.linkedin);
    setTwitterLink("https://x.com/midpoint363");
    //   setYoutubeLink(data.youtube);
    setTiktokLink("https://www.tiktok.com/@midpoint01");

    //   setEnableDarkMode(data.enable_dark_mode);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        siteName_ar,
        siteName_en,
        siteEmail,
        sitePhone,
        mainLogo,
        footerLogo,
        favicon,
        mainColor,
        secondaryColor,
        thirdColor,
        darkMainColor,
        darkSecondaryColor,
        facebookLink,
        instagramLink,
        linkedinLink,
        snapchatLink,
        twitterLink,
        youtubeLink,
        tiktokLink,
        address_en,
        address_ar,
        currency,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
