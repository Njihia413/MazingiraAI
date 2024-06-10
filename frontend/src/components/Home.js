import React from "react";
import HomeImg1 from "../assets/images/HomeImg1.png";
import HomeImg2 from "../assets/images/HomeImg2.png";
import HomeImg3 from "../assets/images/HomeImg3.png";
import Line from "../assets/images/Line1.png";
import Person from "../assets/images/Person.png";
import Path from "../assets/images/Path.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:mt-[5rem]">
                        <p className="font-baloo font-semibold text-black text-[30px] md:text-[60px]">
                            Let’s Connect <br/>
                            with our Environment <br/>
                            in Real Time
                        </p>

                        <p className="font-baloo font-normal text-[18px] text-[#21383E] md:mt-5 sm:mt-3">
                            Welcome to MazingiraAI – your gateway to real-time climate insights.&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            Let's make a difference together!
                        </p>


                        <img className="md:h-[502px] w-[502px] sm:h-[400px] md:[1.5rem] md:mt-[3rem] hidden sm:block"
                             alt="HomeImg2"
                             src={HomeImg2}/>
                    </div>

                    <div className="mt-[2.5rem] md:mt-[5rem]">
                        <img className="md:h-[718px] w-[718px] sm:h-full" alt="HomeImg1" src={HomeImg1}/>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="mt-[5rem] md:mt-[10rem]">
                        <p className="font-baloo font-semibold text-black text-[25px] md:text-[50px]">
                            Chat with MazingiraAI&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            anytime, anywhere on&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            matters with Climate
                        </p>


                        <img className="mt-[1.5rem] md:mt-[3rem]" src={Line} alt="Line"/>

                        <p className="mt-[1.5rem] md:mt-[3rem] font-baloo font-regular text-[18px] text-[#404852]">
                            Catalyze change with MazingiraAI, your dynamic hub for real-time&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            climate knowledge and impactful actions, guiding us towards a resilient,&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            sustainable tomorrow.
                        </p>


                        <div className="flex items-center">
                            <img className="mt-[1.5rem] md:mt-[3rem] rounded-full" src={Person} alt="Line"/>

                            <p className="font-baloo font-bold text-[14px] text-[#273240] px-3 mt-[1.5rem] md:mt-[3rem]">
                                Someone famous

                                <p className="font-baloo font-medium text-[#2C3A4B]">
                                    CS of Climate or, Climate advocate etc
                                </p>
                            </p>
                        </div>
                    </div>

                    <div className="mt-[1rem]">
                        <img className="md:h-[866px] w-[696px] sm:h-full" alt="HomeImg1" src={HomeImg3}/>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="mt-[5rem] md:mt-[10rem]">
                        <p className="font-baloo font-semibold text-[30px] md:text-[60px] text-black">
                            Browse our&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            articles on Climate&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            change
                        </p>


                        <p className="font-baloo font-normal text-[#404852] text-[18px] mt-[1rem] md:mt-[2rem]">
                            Explore our curated collection of articles delving deep into the&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            intricate facets of climate change, offering insights, solutions,&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            and inspiration to catalyze meaningful action towards a greener,&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            more sustainable future.
                        </p>

                    </div>

                    <div className="mt-[5rem] md:mt-[10rem]">
                        <Link to="/blogs" className="block">
                            <div className="cursor-pointer">
                                <div className="flex">
                                    <p className="font-baloo font-semibold text-[25px] text-[#6f6f6f] mt-3">01</p>

                                    <p className="font-baloo font-normal text-[30px] md:text-[40px] text-black px-10">
                                        Kenya's Climate Resilience Revolution: Private Finance Coupled With Civic Action Driving Sustainable Solutions Climate Impact
                                    </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="lucide lucide-arrow-right mt-4">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                <p className="px-16 font-baloo font-normal text-[15px] text-[#6f6f6f] mt-4">
                                    The Crisis Unveiled: Impact of Heavy Rains and Flooding
                                </p>

                                <img className="mt-[1.5rem] md:mt-[3rem]" src={Path} alt="Path"/>
                            </div>
                        </Link>

                        <Link to="/blogs" className="block">
                            <div className="mt-[1.5rem] md:mt-[3rem] cursor-pointer">
                                <div className="flex">
                                    <p className="font-baloo font-semibold text-[25px] text-[#6f6f6f] mt-3">02</p>

                                    <p className="font-baloo font-normal text-[30px] md:text-[40px] text-black px-10">
                                        Kenya Climate Ventures’: Transformative Initiatives In Refugee Communities
                                    </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="lucide lucide-arrow-right mt-4">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                <p className="px-16 font-baloo font-normal text-[15px] text-[#6f6f6f] mt-4">
                                    Bolstering Refugees Through Innovative Investments
                                </p>

                                <img className="mt-[1.5rem] md:mt-[3rem]" src={Path} alt="Path"/>
                            </div>
                        </Link>

                        <Link to="/blogs" className="block">
                            <div className="mt-[1.5rem] md:mt-[3rem] cursor-pointer">
                                <div className="flex">
                                    <p className="font-baloo font-semibold text-[25px] text-[#6f6f6f] mt-3">03</p>

                                    <p className="font-baloo font-normal text-[30px] md:text-[40px] text-black px-10">
                                        Cultivating Resilience: Kenya’s Climate-Smart Agriculture Revolution
                                    </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="lucide lucide-arrow-right mt-4">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                <p className="px-16 font-baloo font-normal text-[15px] text-[#6f6f6f] mt-4">
                                    Seeds of Change: Unveiling Climate-Smart Initiatives in Nyandarua and Machakos Counties
                                </p>

                                <img className="mt-[1.5rem] md:mt-[3rem]" src={Path} alt="Path"/>
                            </div>
                        </Link>

                        <Link to="/blogs" className="block">
                            <div className="mt-[1.5rem] md:mt-[3rem] cursor-pointer">
                                <div className="flex">
                                    <p className="font-baloo font-semibold text-[25px] text-[#6f6f6f] mt-3">04</p>

                                    <p className="font-baloo font-normal text-[30px] md:text-[40px] text-black px-10">
                                        Harmonizing Life And Peace: Kenya Climate Ventures’ Vision For World Water Day 2024
                                    </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="lucide lucide-arrow-right mt-4">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                <p className="px-16 font-baloo font-normal text-[15px] text-[#6f6f6f] mt-4">
                                    Nurturing Sustainable Solutions and Resilient Communities through Water Innovation and Stewardship
                                </p>

                                <img className="mt-[1.5rem] md:mt-[3rem]" src={Path} alt="Path"/>
                            </div>
                        </Link>

                        <Link to="/blogs" className="block">
                            <div className="mt-[1.5rem] md:mt-[3rem] cursor-pointer">
                                <div className="flex">
                                    <p className="font-baloo font-semibold text-[25px] text-[#6f6f6f] mt-3">05</p>

                                    <p className="font-baloo font-normal text-[30px] md:text-[40px] text-black px-10">
                                        Pioneering Evidence Driven Eco-Friendly Practices For Sustainable Macadamia Farming In Kenya
                                    </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="lucide lucide-arrow-right mt-4">
                                        <path d="M5 12h14"/>
                                        <path d="m12 5 7 7-7 7"/>
                                    </svg>
                                </div>

                                <p className="px-16 font-baloo font-normal text-[15px] text-[#6f6f6f] mt-4">
                                    Empowering Lives Through Macadamia Farming: A Bedrock for Prosperity
                                </p>

                                <img className="mt-[1.5rem] md:mt-[3rem]" src={Path} alt="Path"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;
