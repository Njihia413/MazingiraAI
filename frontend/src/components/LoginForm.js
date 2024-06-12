import React, {useReducer, useState} from "react";
import Line2 from "../assets/images/Line2.png";
import { apiHost } from "../utils/apiHost";
import { objectReducer } from "../utils/reducers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginForm = () => {
    const [state, dispatch] = useReducer(objectReducer, {email: '', password: ''})
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showToast = (message, type) => {
        //console.log(`Showing toast: ${message} - ${type}`); // Debug log
        switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'error':
                toast.error(message);
                break;
            default:
                toast(message);
        }
    };


    function handleLogin(e) {
        e.preventDefault();
        setIsLoggingIn(true);

        fetch(`${apiHost}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
        }).then(res => {
            if (res.ok) {
                res.json().then(d => {
                    const data = {
                        user: d.user,
                        accessToken: d.access_token
                    };
                    localStorage.setItem('data', btoa(JSON.stringify(data)));
                    setUserData(data);
                    showToast("Login successful. Redirecting to chat...", "success");
                    setTimeout(() => {
                        setIsLoggingIn(false);
                        navigate('/chat');
                    }, 3000);
                });
            } else {
                showToast("Invalid email or password", "error");
                setIsLoggingIn(false);
            }
        })
        .catch(error => {
            showToast("An error occurred. Please try again later", "error");
            console.error("Error:", error);
            setIsLoggingIn(false);
        });
    }

    return (
        <>
            <form className="max-w-xl mt-[2rem]" onSubmit={handleLogin}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                        E-mail
                    </label>
                    <input type="email"
                           id="email"
                           className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                           placeholder="eg email@gmail.com" required
                           value={state.email}
                           onChange={(e) => dispatch({'email': e.target.value})}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                        Password
                    </label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"}
                               id="password"
                               className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                               placeholder="@#*%"
                               required
                               value={state.password}
                               onChange={(e) => dispatch({'password': e.target.value})}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                top: '30%',
                                cursor: 'pointer'
                            }}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-[#CFD9E0] rounded bg-white"
                                   required/>
                        </div>

                        <div className="">
                            <label htmlFor="remember"
                                   className="ms-2 text-[16px] font-baloo font-normal text-[#718096]">
                                Remember me
                            </label>
                        </div>
                    </div>
                    {/*<a href="/forgot-password"*/}
                    {/*   className="text-[16px] font-baloo font-medium text-[#A19B9B] underline hover:no-underline dark:text-primary-500">*/}
                    {/*    Forgot password?*/}
                    {/*</a>*/}
                </div>

                <button type="submit"
                        className="mt-[2rem] text-[#F7FAFC] bg-[#00BB1E] h-14 font-baloo font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center"
                        aria-disabled={isLoggingIn}>
                    <div className="flex justify-center gap-2">
                        {isLoggingIn ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="mt-1">
                                <circle cx="12" cy="2" r="0" fill="white">
                                    <animate attributeName="r" begin="0" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(45 12 12)">
                                    <animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(90 12 12)">
                                    <animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(135 12 12)">
                                    <animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(180 12 12)">
                                    <animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(225 12 12)">
                                    <animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(270 12 12)">
                                    <animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                                <circle cx="12" cy="2" r="0" fill="white" transform="rotate(315 12 12)">
                                    <animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s"
                                             keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                                             repeatCount="indefinite" values="0;2;0;0"/>
                                </circle>
                            </svg>
                            :
                            ""
                        }
                        {isLoggingIn ? "Signing in..." : "Sign In"}
                    </div>
                </button>

                <img src={Line2} className="mx-auto mt-[3rem]" alt="Line2"/>

                <button
                    className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                             className="absolute left-0 w-5" alt="google logo"/>
                        <span
                            className="block w-max font-baloo font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                    </span>
                    </div>
                </button>

                <button
                    className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                    <div className="relative flex items-center space-x-4 justify-center">
                        <img src="https://www.svgrepo.com/show/448224/facebook.svg"
                             className="absolute left-0 w-5" alt="google logo"/>
                        <span
                            className="block w-max font-baloo font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Facebook
                    </span>
                    </div>
                </button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </>
    )
}

export default LoginForm;
