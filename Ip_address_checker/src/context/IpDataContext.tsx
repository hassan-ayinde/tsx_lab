// src/context/IpDataContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface IpData {
  ip: string;
  location: {
    country: string;
    city: string;
    postalCode: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
}

interface IpDataContextType {
  ipData: IpData | null;
  setIpData: (data: IpData) => void;
}

const IpDataContext = createContext<IpDataContextType | undefined>(undefined);

export const IpDataProvider = ({ children }: { children: ReactNode }) => {
  const [ipData, setIpData] = useState<IpData | null>(null);

  return (
    <IpDataContext.Provider value={{ ipData, setIpData }}>
      {children}
    </IpDataContext.Provider>
  );
};

export const useIpData = () => {
  const context = useContext(IpDataContext);
  if (!context) {
    throw new Error("useIpData must be used within an IpDataProvider");
  }
  return context;
};
