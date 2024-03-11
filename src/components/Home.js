import React from "react";
import HomeImg1 from "../assets/images/HomeImg1.png";
import HomeImg2 from "../assets/images/HomeImg2.png";
import HomeImg3 from "../assets/images/HomeImg3.png";
import Line from "../assets/images/Line1.png";
import Person from "../assets/images/Person.png";

const Home = () => {
    return (
        <div className="container mx-auto bg-white">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="mt-[5rem]">
                    <p className="font-baloo font-semibold text-black text-[60px]">
                        Let’s Connect <br/>
                        with our Environment <br/>
                        in Real Time
                    </p>

                    <p className="font-baloo font-normal text-[20px] text-[#21383E] md:mt-5 sm:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt
                        ut labore
                    </p>

                    <img className="md:h-[502px] w-[502px] sm:h-[400px] mt-[3rem]" alt="HomeImg2" src={HomeImg2}/>
                </div>

                <div className="mt-[5rem]">
                    <img className="md:h-[718px] w-[718px] sm:h-full" alt="HomeImg1" src={HomeImg1}/>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="mt-[10rem]">
                    <p className="font-baloo font-semibold text-black text-[50px]">
                        Chat with MazingiraAI <br/>
                        anytime, anywhere on <br/>
                        matters with Climate
                    </p>

                    <img className="mt-[3rem]" src={Line} alt="Line"/>

                    <p className="mt-[3rem] font-baloo font-regular text-[14px] text-[#404852]">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                        ad minim veniam.”
                    </p>

                    <div className="flex items-center">
                        <img className="mt-[3rem] rounded-full" src={Person} alt="Line"/>

                        <p className="font-baloo font-bold text-[14px] text-[#273240] px-3 mt-[3rem]">
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
                <div className="mt-[10rem]">
                    <p className="font-baloo font-semibold text-[60px] text-black">
                        Browse our <br/>
                        articles on Climate
                        change
                    </p>

                    <p className="font-baloo font-normal text-[#404852] text-[14px] mt-[2rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                        Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="mt-[10rem]">
                    <div className="flex">
                        <p className="font-baloo font-semibold text-[25px] text-black mt-3">01</p>

                        <p className="font-baloo font-normal text-[40px] text-black px-10">
                            Lorem Ipsum
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-arrow-right mt-4">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;