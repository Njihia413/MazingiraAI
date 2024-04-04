import React from "react";
import Logo from "../assets/images/Logo.png";
import LoginImg from "../assets/images/Signin.png";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <section>
            <div className="min-h-screen grid md:grid-cols-2">
                <div className="p-10">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                        <img className="h-16" alt="Logo" src={Logo}/>
                        <p className="font-bold font-baloo py-4 text-[20px]">MazingiraAI</p>
                    </a>

                    <p className="font-baloo font-black text-[48px] text-black mt-[2rem]">Sign in</p>

                    <p className="font-baloo font-normal text-[18px] text-[#718096] mt-[2rem]">
                        Don't have an account? <a href="/signup"
                                                  className="text-[#00BB1E] font-medium underline hover:no-underline">Create
                        now</a>
                    </p>

                    <LoginForm/>
                </div>

                <div className="hidden sm:hidden md:block">
                    <img className="min-h-screen w-full" alt="Login" src={LoginImg}/>
                </div>
            </div>
        </section>
    )
}

export default Login;