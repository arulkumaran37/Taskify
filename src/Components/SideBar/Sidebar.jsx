import Logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
   const navlinks = [
        {
            name: "Home",
            icon: <IoHomeOutline className="text-xl" />,
        },
        {
            name: "Important",
            icon: <FaRegStar className="text-xl" />,
        },
        {
            name: "Completed",
            icon: <IoCheckmarkDoneOutline className="text-xl" />,
        },
        {
            name: "AllTasks",
            icon: <IoListOutline className="text-xl" />,
        },
    ];
    
    const location = useLocation();
    return (
        <div className="w-120 h-screen bg-[#f2f8f9] shadow-md text-gray-800 flex flex-col">
            <div className="flex items-center justify-center h-16">
                <Link to="/home" className="text-2xl font-bold">
                    <img src={Logo} alt="Taskify" className="h-50  mt-10" />
                </Link>
            </div>
            <nav className="flex-1 mt-5">
                <ul className="space-y-2 p-4">
                    {navlinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={`/${link.name.toLowerCase()}`}
                                className={`flex items-center space-x-2 p-2 rounded hover:bg-[#6d83ff]  ${location.pathname === `/${link.name.toLowerCase()}` ? 'bg-[#2d4bf5] text-white font-semibold' : ''}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default SideBar;
