import { Link } from "react-router-dom";
import logo from "../assets/Nickname.jpg"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-3 shadow-md bg-white sticky top-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-lg">
            <div className="flex items-center ml-3">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full"/>
                <div className="text-xl font-bold ml-2 text-red-800">MyPortofolio</div>
            </div>

            <div className="space-x-6">
                <Link to="/" className="text-red-800 hover:text-red-500 transition-colors duration-200">
                    Home
                </Link>
                <Link to="/about" className="text-red-800 hover:text-red-500 transition-colors duration-200">
                    About Me
                </Link>
                <Link to="/projects" className="text-red-800 hover:text-red-500 transition-colors duration-200">
                    Projects
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;