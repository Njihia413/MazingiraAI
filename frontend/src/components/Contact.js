import React from "react";
import Navbar from "./Navbar";
import Rectangle from "../assets/images/ContactRectangle.png";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
} from "@material-tailwind/react";
import ContactFrame from "../assets/images/ContactFrame.png";
import ContactGroup from "../assets/images/ContactGroup.png";
import ContactLetter from "../assets/images/ContactLetter.png";


const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="grid md:grid-cols-1 mt-[2rem] bg-white min-h-screen">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h4 className="font-baloo font-bold text-[#121212] text-[38px] md:text-[48px]">
                            Contact Us
                        </h4>

                        <p className="font-baloo font-medium mt-[0rem] md:mt-[0rem] text-[18px] text-[#717171] px-1">
                            Any question or remarks? Just write us a message!
                        </p>

                        <img src={Rectangle} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[1rem]"/>
                    </div>

                    <div className="md:mt-[2rem] mt-[1rem] md:p-0 p-6">
                        <div className="bg-[#ececec] rounded-md mb-[2rem]">
                            <div className="grid md:grid-cols-3">
                                <div className="col-span-1 bg-contactBackground h-auto rounded-md pl-[2rem] py-[1rem] hidden sm:hidden md:block">
                                    {/*<img src={ContactFrame} alt="ContactFrame" className="h-full"/>*/}
                                    <p className="font-baloo font-semibold text-[28px] text-white">Contact Information</p>

                                    <p className="font-baloo font-normal text-[18px] text-[#C9C9C9]">
                                        Problems? Complaints? Compliments? <br/>
                                        Talk to us now!
                                    </p>

                                    <div className="mt-[3rem]">
                                        <div className="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 viewBox="0 0 256 256">
                                                <path fill="white"
                                                      d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.93a70.35 70.35 0 0 0-50.33-50.34a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.55 26.33 26.34A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m72.43 78.73l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 24 88c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62"/>
                                            </svg>

                                            <p className="font-baloo font-normal text-[16px] text-center text-white md:mt-1">+254711223344</p>
                                        </div>
                                    </div>

                                    <div className="mt-[3rem]">
                                        <div className="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 viewBox="0 0 24 24">
                                                <path fill="white" d="M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z"/>
                                            </svg>

                                            <p className="font-baloo font-normal text-[16px] text-center text-white md:mt-1">mazingira.ai@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="mt-[3rem]">
                                        <div className="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 viewBox="0 0 32 32">
                                                <path fill="white"
                                                      d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"/>
                                                <circle cx="16" cy="13" r="4" fill="none"/>
                                            </svg>

                                            <p className="font-baloo font-normal text-[16px] text-center text-white md:mt-1">Nairobi, Kenya.</p>
                                        </div>
                                    </div>


                                    <div className="grid md:grid-cols-2 mt-[12rem] mb-[1rem] ">
                                        <div className="flex gap-5">
                                            <div className="bg-[#00BB1E] w-[32px] h-[32px] rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     viewBox="0 0 24 24" className="mx-auto mt-2">
                                                    <path fill="white"
                                                          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/>
                                                </svg>
                                            </div>

                                            <div className="bg-white w-[32px] h-[32px] rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     viewBox="0 0 16 16" className="mx-auto mt-2">
                                                    <path fill="black"
                                                          d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"/>
                                                </svg>
                                            </div>

                                            <div className="bg-[#00BB1E] w-[32px] h-[32px] rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     viewBox="0 0 16 16" className="mx-auto mt-2">
                                                    <path fill="white"
                                                          d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0a8 8 0 0 0-.412-.833a.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085a8 8 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.2 13.2 0 0 0 4.001-2.02a.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612"/>
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-span-2 p-5 mt-[2rem]">
                                    <form>
                                        <div className=" h-11 w-full mt-2">
                                            <input placeholder="Enter your Name *"
                                                   className="peer h-full w-full border-b border-[#707070] bg-transparent pt-4 pb-1.5 font-baloo text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-[#707070] focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
                                        </div>

                                        <div className=" h-11 w-full mt-[5rem]">
                                            <input placeholder="Enter your Email *"
                                                   className="peer h-full w-full border-b border-[#707070] bg-transparent pt-4 pb-1.5 font-baloo text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-[#707070] focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
                                        </div>

                                        <div className=" h-11 w-full mt-[5rem]">
                                            <input placeholder="Enter your Message *"
                                                   className="peer h-full w-full border-b border-[#707070] bg-transparent pt-4 pb-1.5 font-baloo text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-[#707070] focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                className="mt-[3rem] w-[165px] h-[49px] all-[unset] bg-[#00BB1E] rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>

                                    <img src={ContactLetter} alt="ContactLetter" className="ml-auto h-40 w-80 mt-4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
