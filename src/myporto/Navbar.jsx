import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";
import logo from "../assets/Nickname.jpg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-3 shadow-md bg-white sticky top-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-lg">
            <div className="flex items-center ml-3">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full"/>
                <div className="text-xl font-bold ml-2 text-red-800">MyPortofolio</div>
            </div>

            <div className="md:hidden mr-3">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-red-800">
                {isOpen ? <X className="text-white w-4 h-4" /> : <Menu className="text-white w-4 h-4" />}
                </button>
            </div>

            <div className="hidden md:flex space-x-6 mr-6">
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

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-5 p-4 md:hidden">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-red-800 hover:text-red-500">
                    Home
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-red-800 hover:text-red-500">
                    About Me
                </Link>
                <Link to="/projects" onClick={() => setIsOpen(false)} className="text-red-800 hover:text-red-500">
                    Projects
                </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;