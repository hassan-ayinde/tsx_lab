import { IoLogoGithub } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <IoLogoGithub className="text-7xl"/>
        <h1 className="text-xl font-semibold">GitHub Repository Finder</h1>
    </div>
  )
}

export default Header;

