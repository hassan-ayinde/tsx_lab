import {useState } from "react";
import type { ReactNode } from "react";
import type { IpData } from "./IpDataContextInstance";
import { IpDataContext } from "./IpDataContextInstance";

export const IpDataProvider = ({ children }: { children: ReactNode }) => {
  const [ipData, setIpData] = useState<IpData | null>(null);

  return (
    <IpDataContext.Provider value={{ ipData, setIpData }}>
      {children}
    </IpDataContext.Provider>
  );
};
