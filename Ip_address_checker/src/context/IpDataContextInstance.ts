import { createContext } from "react";

export interface IpData {
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

export interface IpDataContextType {
  ipData: IpData | null;
  setIpData: (data: IpData) => void;
}

export const IpDataContext = createContext<IpDataContextType | undefined>(undefined);