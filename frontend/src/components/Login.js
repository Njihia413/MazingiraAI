import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import LoginImg from "../assets/images/Signin.png";
import LoginForm from "./LoginForm";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/user";
import { useContext } from "react";

const Login = () => {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!!userData){
            navigate('/chat')
        }
    }, [userData])

    return (
        <section>
            <div className="min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="p-10">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                        <img className="h-16" alt="Logo" src={Logo} />
                        <p className="font-bold font-baloo py-4 text-[20px]">MazingiraAI</p>
                    </Link>

                    <p className="font-baloo font-black text-[48px] text-black mt-[2rem]">Sign in</p>

                    <p className="font-baloo font-normal text-[18px] text-[#718096] mt-[2rem]">
                        Don't have an account?&nbsp;
                        <Link to="/signup" className="text-[#00BB1E] font-medium underline hover:no-underline">Create now</Link>
                    </p>

                    <LoginForm/>
                </div>

                <div className="hidden md:hidden lg:block">
                    <img className="h-full w-full" alt="Login" src={LoginImg}/>
                </div>
            </div>
        </section>
    )
}

export default Login;
