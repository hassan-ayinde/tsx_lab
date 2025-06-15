// import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { useState, useEffect } from "react";

const SearcBar = () => {
    const [ipAddress, setIpAddress] = useState<string>("");

    const handleIpAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIpAddress(e.target.value);
    }
  return (
    <form className="w-[90%] mx-auto">
        <div className='flex items-center justify-between gap-1 mt-5 rounded-lg bg-white shadow-md w-full max-w-md mx-auto'>
            <input 
                type="text" 
                placeholder="Enter IP address" 
                className="w-full px-4 text-black border-0 focus:border-0 focus:outline-none"
                value={ipAddress}
                onChange={handleIpAddressChange}
            />
            <button title="submit" type="submit" 
                className="bg-gray-700 h-[40px] rounded-r-lg px-4 py-2 hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(ipAddress);
                    setIpAddress("")

                }}
            >
                <FaGreaterThan className="h-auto"/>
            </button>
        </div>
    </form>
  )
}

export default SearcBar