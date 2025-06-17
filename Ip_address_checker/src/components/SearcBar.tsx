// import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
// import { useState} from "react";
import axios from "axios";
import { useIpData } from "@/context/IpDataContext";

interface SearcBarProps {
    ipAddress: string;
    setIpAddress: (ip: string) => void;
    onSearch: () => void;
}

const SearcBar = ({onSearch, ipAddress, setIpAddress}: SearcBarProps) => {
    // const [ipAddress, setIpAddress] = useState<string>("");
    const {setIpData} = useIpData();
    // const [error,setError] = useState<string | null>(null)

    const apiKey = import.meta.env.VITE_IPADDRESS_API_TOKEN;

    const fetchIpDetails = async () => {
        try {
            if (!ipAddress) {
                console.error("IP address or domain is required");
                return;
            }

            const ipResponse = await axios.get('https://geo.ipify.org/api/v2/country,city', {
                params: {
                    apiKey: apiKey,
                    domain: ipAddress,

                }
            })
            setIpData(ipResponse.data)
            console.log(ipResponse.data)
            onSearch();
            // const ipData = ipResponse.data;
            // console.log(ipData)
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error fetching IP details:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        }

    }

    const handleIpAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIpAddress(e.target.value);
    }
  return (
    <form className="w-[90%] mx-auto">
        <div className='flex items-center justify-between gap-1 mt-5 rounded-lg bg-white shadow-md w-full max-w-md mx-auto'>
            <input 
                type="text" 
                placeholder="Enter IP address or domain" 
                className="w-full px-4 text-black border-0 focus:border-0 focus:outline-none"
                value={ipAddress}
                onChange={handleIpAddressChange}
            />
            <button title="submit" type="submit" 
                className="bg-gray-700 h-[40px] rounded-r-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    // console.log(ipAddress);
                    setIpAddress("")
                    fetchIpDetails();
                }}
            >
                <FaGreaterThan className="h-auto"/>
            </button>
        </div>
    </form>
  )
}

export default SearcBar