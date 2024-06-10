import React from "react";
import FourOFourImg from "../assets/images/404.png";
import {Link} from "react-router-dom";

const FourOFour = () => {
    return (
        <section>
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                <div className="px-[5rem] py-[13rem] lg:text-left text-center">
                    <h1 className="font-baloo font-normal md:text-[200px] text-[100px] text-[#CDA274]">404</h1>

                    <p className="font-baloo font-medium text-[20px] md:text-[30px] text-[#292F36]">
                        We are sorry, but the page
                        you requested was not found
                    </p>

                    <Link to="/"
                          className="mt-[3rem] w-[165px] h-[49px] all-[unset] bg-[#00BB1E] rounded-md box-border font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px] flex items-center justify-center mx-auto lg:mx-0">
                        Back to home
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"
                             className="ml-2">
                            <path fill="#ffffff"
                                  d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
                        </svg>
                    </Link>
                </div>

                <div className="hidden sm:hidden lg:block">
                    <img className="h-full w-full" alt="404" src={FourOFourImg}/>
                </div>
            </div>
        </section>
    )
}

export default FourOFour;
