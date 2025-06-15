import React from 'react'
import { FaGripfire } from "react-icons/fa";
import SearcBar from './SearcBar';

const Header: React.FC = () => {
    

  return (
    <header 
        className='text-center bg-[url("/src/assets/pattern-bg-desktop.png")]
        bg-cover bg-no-repeat bg-center text-white h-[300px] py-6'>
        <div className='flex items-center gap-1 justify-center md:text-3xl font-bold pb-2'>
            <FaGripfire />
            <h1>IP Address Checker</h1>
        </div>
        <p className='text-lg'>Enter an IP address to check its validity and details.</p>

        <SearcBar/>
    </header>
  )
}

export default Header