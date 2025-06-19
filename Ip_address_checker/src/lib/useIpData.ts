import { useContext } from "react";
import { IpDataContext } from "@/context/IpDataContextInstance";

export const useIpData = () => {
  const context = useContext(IpDataContext);
  if (!context) {
    throw new Error("useIpData must be used within an IpDataProvider");
  }
  return context;
};