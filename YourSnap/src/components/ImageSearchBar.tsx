import { Input } from "@/components/ui/input"
import { IoMdSearch } from "react-icons/io";
const ImageSearchBar = () => {
  return (
    <div className="header h-52 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-xl mx-auto bg-white rounded-md shadow-md px-4 py-1">
        <IoMdSearch />
        <Input 
          className="focus-visible:ring-0 border-none focus:outline-none shadow-none"
          placeholder="Search for images..."
        />
      </div>
    </div>
  )
}

export default ImageSearchBar