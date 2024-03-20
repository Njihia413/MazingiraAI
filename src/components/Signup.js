import React from "react";
import Logo from "../assets/images/Logo.png";
import SignupImg from "../assets/images/Signup.png";
import SignupForm from "./SignupForm";

const Signup = () => {
    return (
        <section>
            <div className="min-h-screen grid md:grid-cols-2">
                <div className="p-10">
                    <div className="flex">
                        <img className="flex items-center space-x-3 rtl:space-x-reverse h-16 cursor-pointer" alt="Logo"
                             src={Logo}/>
                        <p className="font-bold font-baloo py-4 px-3 text-[20px]">MazingiraAI</p>
                    </div>

                    <p className="font-baloo font-black text-[48px] text-black mt-[1rem]">Sign up</p>

                    <p className="font-baloo font-normal text-[18px] text-[#718096] mt-[1rem]">
                        Already have an account? <a href="/login" className="text-[#00BB1E] font-medium underline hover:no-underline">
                        Sign in</a>
                    </p>

                    <SignupForm/>
                </div>

                <div className="hidden sm:hidden md:block">
                    <img className="h-auto w-full" alt="SignupImg" src={SignupImg}/>
                </div>
            </div>
        </section>
    )
}

export default Signup;