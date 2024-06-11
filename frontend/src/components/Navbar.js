import React, { useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { UserContext } from "../context/user";
import { useContext } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { logout, userData } = useContext(UserContext)
    const navigate = useNavigate()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="container mx-auto bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between py-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                    <img className="h-16" alt="Logo" src={Logo} />
                    <p className="font-bold font-baloo py-4 text-[20px]">MazingiraAI</p>
                </Link>

                {
                    !userData ?
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="text-[#00BB1E] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px] md:block hidden"
                            >
                                <a onClick={()=>navigate('/signup')}>Sign up</a>
                            </button>
                            <div
                                className="font-baloo bg-brownBackground -pr-40 w-[111px] h-[49px] font-semibold rounded-md text-[#00BB1E] text-[18px] text-center px-4 py-2 cursor-pointer md:block hidden"
                            >
                                <a onClick={()=>navigate('/login')}>Log in</a>
                            </div>
                        </div>
                    : ''
                }

                {
                    userData ?
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div
                                className="font-baloo bg-brownBackground -pr-40 w-[111px] h-[49px] font-semibold rounded-md text-[#00BB1E] text-[18px] text-center px-4 py-2 cursor-pointer md:block hidden"
                                >
                                <a onClick={()=>logout()}>Log out </a>
                            </div>
                        </div>
                        : ''
                }

                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 mr-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-menu-deep"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 6h16" />
                            <path d="M7 12h13" />
                            <path d="M10 18h10" />
                        </svg>
                    </button>
                {/* </div> */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isMobileMenuOpen ? "flex" : "hidden"
                    }`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-normal p-4 md:p-0 mt-2 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "text-[#00BB1E]" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "text-[#00BB1E]" : "")}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? "text-[#00BB1E]" : "")}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/map"
                                className={({ isActive }) => (isActive ? "text-[#00BB1E]" : "")}
                            >
                                Map
                            </NavLink>
                        </li>
                        {
                            userData ?
                                <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                                    <NavLink
                                        to="/chat"
                                        className={({ isActive }) => (isActive ? "text-[#00BB1E]" : "")}
                                    >
                                        Chat
                                    </NavLink>
                                </li>
                            : ''
                        }
                        {
                            !userData ?
                                <li className="md:hidden block">
                                    <div className="flex flex-col">
                                        <button
                                            type="button"
                                            className="text-[#00BB1E] bg-brownBackground  w-[111px] h-[49px] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px] mb-4"
                                        >
                                            <Link to="/login">Log in</Link>
                                        </button>
                                        <button
                                            type="button"
                                            className="text-[#00BB1E] bg-brownBackground  w-[111px] h-[49px] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px]"
                                        >
                                            <Link to="/signup">Sign up</Link>
                                        </button>
                                    </div>
                                </li>
                            : ''
                        }
                        {
                            userData ?
                                <li className="md:hidden block">
                                    <div className="flex flex-col">
                                        <button
                                            type="button"
                                            className="text-[#00BB1E] bg-brownBackground  w-[111px] h-[49px] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px] mb-4"
                                        >
                                            <a onClick={() => logout()}>Log out </a>
                                        </button>
                                    </div>
                                </li>
                            : ''
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
