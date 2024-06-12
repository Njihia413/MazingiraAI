import React from "react";
import Navbar from "./Navbar";
import Rectangle from "../assets/images/ContactRectangle.png";
import Rectangle2 from "../assets/images/Line.png";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Pricing = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid md:grid-cols-1">
                    <h3 className="font-baloo font-extrabold text-[48px] text-[#121212] text-center">
                        Pricing & Plan
                    </h3>

                    <img src={Rectangle} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[1rem]"/>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-[3rem]">
                    <div
                        className="flex flex-col bg-[#F4F0EC] border border-[#F4F0EC] shadow rounded-[33px] hover:shadow-lg">
                        <h3 className="mt-[3rem] font-baloo font-semibold text-[25px] text-[#292F36] text-center">Pro</h3>
                        <div className="inline-flex items-center justify-center mt-4 text-center">
                            <p className="font-baloo font-bold text-[25px] text-[#292F36] leading-none">$</p>
                            <p className="font-baloo font-bold text-[85px] text-[#292F36] leading-none">19</p>
                        </div>
                        <p className="font-baloo font-normal text-[20px] text-[#292F36] mt-[-5px] leading-none text-center">/month</p>
                        <img src={Rectangle2} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[2rem]"/>

                        <div className="font-baloo font-normal text-[18px] text-[#4D5053] p-4">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Everything in Free
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Advanced chatbot interactions (GPT-4)
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Faster climate response times
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Early access to new features
                                </p>
                            </div>


                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Personalized climate tips
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Exclusive blogs and articles
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-auto mb-[3rem]">
                            <Link
                                to="/"
                                className="w-[165px] h-[49px] all-[unset] bg-[#CDA274] rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px] flex items-center justify-center"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"
                                     className="ml-2">
                                    <path fill="#ffffff"
                                          d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>


                    <div
                        className="flex flex-col bg-[#F4F0EC]  border border-[#F4F0EC] shadow rounded-[33px] hover:shadow-lg">
                        <h3 className="mt-[3rem] font-baloo font-semibold text-[25px] text-[#292F36] text-center">Free</h3>
                        <div className="inline-flex items-center justify-center mt-4 text-center">
                            <p className="font-baloo font-bold text-[25px] text-[#292F36] leading-none">$</p>
                            <p className="font-baloo font-bold text-[85px] text-[#292F36] leading-none">0</p>
                        </div>
                        <p className="font-baloo font-normal text-[20px] text-[#292F36] mt-[-5px] leading-none text-center">/month</p>
                        <div className="relative flex justify-center items-center my-3">
                            <div className="absolute inset-0 flex items-center">
                            <div className="border-t border-black w-full"></div>
                            </div>
                            <div
                                className="relative bg-[#00BB1E] text-white text-[18px] font-baloo font-semibold py-2 px-4 rounded-full shadow-md z-10">
                                Most Popular Plan
                            </div>
                        </div>
                        <div className="font-baloo font-normal text-[18px] text-[#4D5053] p-4">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Access to general climate info
                                </p>
                            </div>
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Basic chatbot interactions (GPT-3)
                                </p>
                            </div>
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Access to blogs and articles
                                </p>
                            </div>
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Monthly climate tips
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-auto mb-[3rem]">
                            <Link
                                to="/"
                                className="w-[165px] h-[49px] all-[unset] bg-[#a0e3a8] cursor-not-allowed rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px] flex items-center justify-center opacity-70"
                                aria-disabled="true"
                                onClick={(e) => e.preventDefault()}
                            >
                                Current Plan
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex flex-col bg-[#F4F0EC] text-center border border-[#F4F0EC] shadow rounded-[33px] hover:shadow-lg">
                        <h3 className="mt-[3rem] font-baloo font-semibold text-[25px] text-[#292F36]">Team</h3>
                        <div className="inline-flex items-center justify-center mt-4">
                            <p className="font-baloo font-bold text-[25px] text-[#292F36] leading-none">$</p>
                            <p className="font-baloo font-bold text-[85px] text-[#292F36] leading-none">39</p>
                        </div>
                        <p className="font-baloo font-normal text-[20px] text-[#292F36] mt-[-5px] leading-none">/month</p>
                        <img src={Rectangle2} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[2rem]"/>

                        <div className="font-baloo font-normal text-[18px] text-[#4D5053] p-4 mt-[2rem]">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Everything in Pro
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Team collaboration tools
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Group climate reports
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Priority access to new features
                                </p>
                            </div>


                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Team-specific blogs and articles
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-auto mb-[3rem]">
                            <Link
                                to="/"
                                className="w-[165px] h-[49px] all-[unset] bg-[#CDA274] rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px] flex items-center justify-center"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"
                                     className="ml-2">
                                    <path fill="#ffffff"
                                          d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex flex-col bg-[#F4F0EC] text-center border border-[#F4F0EC] shadow rounded-[33px] hover:shadow-lg">
                        <h3 className="mt-[3rem] font-baloo font-semibold text-[25px] text-[#292F36]">Enterprise</h3>
                        <div className="inline-flex items-center justify-center mt-4">
                            <p className="font-baloo font-bold text-[25px] text-[#292F36] leading-none">$</p>
                            <p className="font-baloo font-bold text-[85px] text-[#292F36] leading-none">99</p>
                        </div>
                        <p className="font-baloo font-normal text-[20px] text-[#292F36] mt-[-5px] leading-none">/month</p>
                        <img src={Rectangle2} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[2rem]"/>

                        <div className="font-baloo font-normal text-[18px] text-[#4D5053] p-4 mt-[2rem]">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Everything in Team
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Custom solutions and reports
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Dedicated account manager
                                </p>
                            </div>

                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    Full data access and analytics
                                </p>
                            </div>


                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#4d5053" stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                                          color="#4d5053"/>
                                </svg>
                                <p>
                                    On-site training sessions
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-auto mb-[3rem]">
                            <Link
                                to="/"
                                className="w-[165px] h-[49px] all-[unset] bg-[#CDA274] rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px] flex items-center justify-center"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"
                                     className="ml-2">
                                    <path fill="#ffffff"
                                          d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Pricing;
