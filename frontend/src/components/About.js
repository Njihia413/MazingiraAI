import React from "react";
import Navbar from "./Navbar";
import AboutImg from "../assets/images/AboutMain.png";
import Group from "../assets/images/Group.png";
import About1 from "../assets/images/About1.png";
import About2 from "../assets/images/About2.png";
import About3 from "../assets/images/About3.png";
import AboutRectangle from "../assets/images/AboutRectangle.png";
import Partner1 from "../assets/images/Image12.png";
import Partner2 from "../assets/images/Image13.png";
import Partner3 from "../assets/images/Image14.png";
import Partner4 from "../assets/images/Image15.png";
import Partner5 from "../assets/images/Image16.png";
import Partner6 from "../assets/images/Image17.png";
import Frame from "../assets/images/Frame.png";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="grid md:grid-cols-1 mt-[2rem]">
                <img src={AboutImg} alt="AboutMain" width="1560px" height="530px" className="md:h-full w-full"/>
            </div>

            <div className="container mx-auto bg-white">
                <div className="text-center mt-[2.5rem] md:mt-[5rem]">
                    <h4 className="font-baloo font-semibold text-black text-[35px] md:text-[45px]">
                        Because a sustainable future starts with a conversation
                    </h4>

                    <img src={Group} alt="Group" className="mx-auto mt-3"/>
                </div>

                <div className="grid md:grid-cols-2 md:mt-[2rem] gap-24">
                    <div className="mx-auto p-6">
                        <h5 className="font-baloo font-semibold text-black text-[30px] md:text-[36px] md:mt-[3rem]">
                            Knowledgeable <br/>
                            climate companion
                        </h5>

                        <img src={AboutRectangle} alt="AboutRectangle" className="mt-3"/>

                        <p className="font-baloo font-normal text-[#848383] md:text-[18px] text-left mt-[1rem]">
                            Journey alongside MazingiraAI, your expert guide through the&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            climate wilderness. With our seasoned insights and steadfast&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            support, we navigate the complexities of environmental&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            stewardship together, empowering you to make informed&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            decisions for a brighter future.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <div className="mx-auto">
                            <img src={About1} alt="About1"/>
                        </div>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 md:mt-[2rem]">
                    <div className="hidden md:block">
                        <div className="mr-auto">
                            <img src={About2} alt="About2"/>
                        </div>
                    </div>

                    <div className="mx-auto p-6">
                        <h5 className="font-baloo font-semibold text-black text-[30px] md:text-[36px] text-right md:mt-[3rem]">
                            Personalized sustainability <br/>
                            guidance
                        </h5>

                        <img src={AboutRectangle} alt="AboutRectangle" className="mt-3 ml-auto"/>

                        <p className="font-baloo font-normal text-[#848383] md:text-[18px] mt-[1rem] text-right">
                            Unlock the power of personalized sustainability with&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            MazingiraAI. Our platform is your compass in the journey&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            towards a greener world, offering tailored insights and&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            guidance to navigate the complexities of sustainability&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            with confidence and purpose.
                        </p>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 md:mt-[2rem] gap-24">
                    <div className="mx-auto p-6">
                        <h5 className="font-baloo font-semibold text-black text-[30px] md:text-[36px] md:mt-[3rem]">
                            Climate change news <br/>
                            and updates
                        </h5>

                        <img src={AboutRectangle} alt="AboutRectangle" className="mt-3"/>

                        <p className="font-baloo font-normal text-[#848383] md:text-[18px] text-left mt-[1rem]">
                        Dive into the pulse of the planet with MazingiraAI's latest&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            dispatches. From breaking developments to innovative&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            solutions our updates keep you ahead of the curve in the&nbsp;
                            <span className="hidden md:inline">
                                <br/>
                            </span>
                            ever-changing landscape of climate change.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <div className="mx-auto">
                            <img src={About3} alt="About3"/>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-[1rem] md:mt-[5rem]">
                    <h4 className="font-baloo font-semibold text-black text-[45px]">
                        Sponsors & Partners
                    </h4>

                    <img src={Group} alt="Group" className="mx-auto mt-3"/>
                </div>

                <div className="grid md:grid-cols-3">
                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner1} alt="Partner1"/>
                    </div>

                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner2} alt="Partner2"/>
                    </div>

                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner3} alt="Partner3"/>
                    </div>

                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner4} alt="Partner4"/>
                    </div>

                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner6} alt="Partner6"/>
                    </div>

                    <div className="flex justify-center items-center mt-[3rem]">
                        <img src={Partner5} alt="Partner5"/>
                    </div>
                </div>

                <div className="text-center mt-[1rem] md:mt-[5rem]">
                    <h4 className="font-baloo font-semibold text-black text-[45px]">
                        Why it works
                    </h4>

                    <img src={Group} alt="Group" className="mx-auto mt-3 mb-4"/>
                </div>


                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                    <div className="mb-6 md:mb-0 mt-0 lg:mt-12">
                        <img src={Frame} alt="Frame" className="mx-auto"/>

                        <h6 className="font-baloo font-semibold text-[24px] text-center mt-4 md:mt-6">24/7 support</h6>

                        <p className="font-baloo font-normal md:text-[18px] text-[#848383] text-center mt-4 md:mt-6">
                            MazingiraAI is always available and breaks <br/>
                            down barriers by providing knowledge <br/>
                            through conversation.
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0 mt-0 lg:mt-12">
                        <img src={Frame1} alt="Frame" className="mx-auto"/>

                        <h6 className="font-baloo font-semibold text-[24px] text-center mt-4 md:mt-6">Engagement</h6>

                        <p className="font-baloo font-normal md:text-[18px] text-[#848383] text-center mt-4 md:mt-6">
                            Our conversation format of MazingiraAI <br/>
                            fosters engagement.
                        </p>
                    </div>

                    <div className="mt-0 lg:mt-12">
                        <img src={Frame2} alt="Frame" className="mx-auto"/>

                        <h6 className="font-baloo font-semibold text-[24px] text-center mt-4 md:mt-6">Learning &
                            Insights</h6>

                        <p className="font-baloo font-normal md:cd text-[18px] text-[#848383] text-center mt-4 md:mt-6">
                            MazingiraAI offers a tool to support <br/>
                            learning and provides insight on the <br/>
                            climate change.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;
