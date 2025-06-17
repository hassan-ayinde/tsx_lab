import React from 'react'
import { FaGripfire } from "react-icons/fa";
import SearcBar from './SearcBar';
import { useState } from 'react';

interface HeaderProps {
  onMapShow: () => void;
}

const Header: React.FC<HeaderProps> = ({onMapShow}) => {
    const [ipAddress, setIpAddress] = useState<string>("");
    const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  return (
    <header 
        className={`text-center bg-[url("/src/assets/pattern-bg-desktop.png")]
        bg-cover bg-no-repeat bg-center text-white ${isSearchTriggered ? 'h-[50vh]' : 'h-screen'} 
        flex flex-col items-center justify-center`}>
        <div className='flex items-center gap-1 justify-center md:text-3xl font-bold pb-2'>
          <FaGripfire />
          <h1>IP Address Checker</h1>
        </div>
        <p className='text-sm sm:text-lg'>Search any IP address or domain to check its validity and details.</p>

        <SearcBar 
          onSearch = {() => {
            setIsSearchTriggered(true);
            onMapShow();
          }} 
          ipAddress = {ipAddress} setIpAddress={setIpAddress}
        />
    </header>
  )
}

export default Header