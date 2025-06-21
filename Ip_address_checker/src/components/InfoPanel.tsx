import { useIpData } from "@/lib/useIpData";

const InfoPanel = () => {
    const {ipData} = useIpData();
    if (!ipData) {
        return null;
    } 
  return (
    <div className='w-[90%] max-w-sm sm:w-[90%] sm:max-w-3xl mx-auto bg-white text-black shadow-lg rounded-xl py-2 px-7 sm:p-6 z-30 
        absolute left-1/2 -translate-x-1/2 top-[40vh] transform text-xs sm:text-sm md:text-base
        grid grid-cols-2 sm:grid-cols-4 gap-3 landscape-top sm:!top-[42vh]'
    >
        <div >
            <h2 className="capitalize font-bold">ip address</h2>
            <p>{ipData.ip}</p>
        </div>
        <div className="text-right sm:text-left">
            <h2 className="capitalize font-bold">location</h2>
            <p>{ipData.location.city}, {ipData.location.country}</p>
        </div>
        <div>
            <h2 className="capitalize font-bold">timezone</h2>
            <p>{ipData.location.timezone}</p>
        </div>
        <div className="text-right sm:text-left">
            <h2 className="capitalize font-bold">isp</h2>
            <p>{ipData.isp}</p>
        </div>
    </div>
  )
}

export default InfoPanel