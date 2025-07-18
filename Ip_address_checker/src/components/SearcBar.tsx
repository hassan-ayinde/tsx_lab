import { FaGreaterThan } from "react-icons/fa";
import axios from "axios";
import { useIpData } from "@/lib/useIpData";

interface SearcBarProps {
    ipAddress: string;
    error: string | null;
    setError: (error: string | null) => void;   
    setIpAddress: (ip: string) => void;
    onSearch: () => void;
}

const SearcBar = ({onSearch, ipAddress, setIpAddress, error, setError}: SearcBarProps) => {
    const {setIpData} = useIpData();

    const apiKey = import.meta.env.VITE_IPADDRESS_API_TOKEN;

    const fetchIpDetails = async () => {
        try {
            if (ipAddress.trim() === "") {
                setError("IP address or domain is required");
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
            setIpAddress("")
            onSearch();
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error.response) {
                    setError("Network error. Please check your internet connection.");
                } else {
                    const errorMessage ="Please enter a valid IP address or domain.";
                    setError(errorMessage)
                }
            } else {
                console.error("Unexpected error:", error);
            }
        }

    }

    const handleIpAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIpAddress(e.target.value);
    }
  return (
    <div className="w-full">
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
                        setError(null);
                        fetchIpDetails();
                    }}
                >
                    <FaGreaterThan className="h-auto"/>
                </button>
            </div>
        </form>
        <p className="text-center mt-2 mb-5 sm:mb-0">{error}</p>
        
    </div>
  )
}

export default SearcBar