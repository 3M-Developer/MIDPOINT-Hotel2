import { createContext, useState } from "react";
import React from "react";
export const ApiAuthContext = createContext(0);

export default function ApiAuthContextProvider({ children }) {
  const [XApiKey, setXApiKey] = useState("P4OIp8prRKBeO0kogfGViTNzmAT8UnzL");
  const [XTenantID, setXTenantID] = useState(7);
  const defaultLang = "en"
  const [baseUrl, setBaseUrl] = useState(
    "https://dashboard.wemisc.net/public/api/v1"
  );

  return (
    <ApiAuthContext.Provider
      value={{
        XApiKey,
        setXApiKey,
        XTenantID,
        baseUrl,
        setBaseUrl,
        defaultLang
      }}
    >
      {children}
    </ApiAuthContext.Provider>
  );
}
