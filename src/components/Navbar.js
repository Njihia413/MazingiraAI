import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <nav className="container  mx-auto bg-white border-gray-200 ">
            <div className=" flex flex-wrap items-center justify-between py-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                    <img className="h-16" alt="Logo" src={Logo}/>
                    <p className="font-bold font-baloo py-4 text-[20px]">MazingiraAI</p>
                </a>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button"
                            className="text-[#00BB1E] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px]  md:block hidden">
                        <a href="/signup">Sign up</a>
                    </button>
                    <div
                        className="font-baloo bg-brownBackground -pr-40 w-[111px] h-[49px] font-semibold rounded-md text-[#00BB1E] text-[18px] text-center px-4 py-2 cursor-pointer md:block hidden">
                        <a href="/login">Log in</a>
                    </div>

                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-deep"
                             width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6h16"/>
                            <path d="M7 12h13"/>
                            <path d="M10 18h10"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col font-normal p-4 md:p-0 mt-2 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive ? "text-[#00BB1E]" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/about"
                                className={({isActive}) => isActive ? "text-[#00BB1E]" : ""}>
                                About
                            </NavLink>
                        </li>
                        <li className="block py-2 px-3 md:p-0 font-baloo font-normal text-[18px]">
                            <NavLink
                                to="/contact"
                                className={({isActive}) => isActive ? "text-[#00BB1E]" : ""}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="md:hidden block">
                            <div
                                className="font-baloo font-normal text-black text-[18px] text-center px-4 py-2 cursor-pointer md:block hidden">
                                <a href="/login">Log in</a>
                            </div>
                            <button type="button"
                                    className="text-[#00BB1E] bg-brownBackground  w-[111px] h-[49px] rounded-[10px] font-baloo font-semibold px-4 py-2 text-center cursor-pointer text-[18px]">
                                <a href="/signup">Sign up</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;