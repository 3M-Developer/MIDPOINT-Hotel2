import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ApiAuthContext } from "../context/AuthContext";
import useInjectScripts from "./useInjectScripts";

const PixelScripts = () => {
  const location = useLocation();
  const { baseUrl, XApiKey, XTenantID, defaultLang } =
    useContext(ApiAuthContext);

  async function getPixels() {
    const response = await axios.get(`${baseUrl}/pixels-scripts`, {
      headers: {
        "X-API-KEY": XApiKey,
        "X-Tenant-ID": XTenantID,
      },
    });
    return response.data.data;
  }

  const { data: pixelsData } = useQuery({
    queryKey: ["pixels", location.pathname],
    queryFn: getPixels,
  });

  useInjectScripts(pixelsData);
  return null;
};

export default PixelScripts;
