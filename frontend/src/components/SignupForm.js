import React, { useReducer, useState } from "react";
import Line2 from "../assets/images/Line2.png";
import { objectReducer } from "../utils/reducers";
import { apiHost } from "../utils/apiHost";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
    const [state, dispatch] = useReducer(objectReducer, { full_name: '', email: '', password: '', confirm_password: '' });
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpStep, setOtpStep] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    const showToast = (message, type) => {
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

    function handleSignup(e) {
        e.preventDefault();
        setIsSigningUp(true);

        if (state.password !== state.confirm_password) {
            showToast("Passwords don't match", "error");
            setIsSigningUp(false);
            return;
        }

        if (!e.target.checkValidity()) {
            showToast("Please fill in all required fields", "error");
            setIsSigningUp(false);
            return;
        }

        fetch(`${apiHost}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
        }).then(res => {
            if (res.ok) {
                showToast("Registration successful. OTP sent to your email.", "success");
                setOtpStep(true); // Move to OTP step
                setIsSigningUp(false);
            } else {
                showToast("An error occurred. Try again later", "error");
                setIsSigningUp(false);
            }
        })
            .catch(error => {
                showToast("An error occurred while registering", "error");
                console.error("Error:", error);
                setIsSigningUp(false);
            });
    }

    function handleVerifyOtp(e) {
        e.preventDefault();
        fetch(`${apiHost}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    showToast('OTP verified successfully!', 'success');
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
                } else {
                    showToast('Invalid OTP', 'error');
                }
            })
            .catch(err => {
                console.error(err);
                showToast('An error occurred while verifying OTP', 'error');
            });
    }

    return (
        <>
            {!otpStep ? (
                <form className="max-w-xl mt-[2rem]" onSubmit={handleSignup}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                            Full Names
                        </label>
                        <input type="text"
                               id="full_name"
                               name="full_name"
                               className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                               placeholder="eg Jane Doe"
                               value={state.full_name}
                               onChange={(e) => dispatch({ 'full_name': e.target.value })}
                               required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                            E-mail
                        </label>
                        <input type="email"
                               id="email"
                               name="email"
                               className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                               placeholder="eg email@gmail.com"
                               value={state.email}
                               onChange={(e) => dispatch({ 'email': e.target.value })}
                               required
                        />
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
                                   name="password"
                                   value={state.password}
                                   onChange={(e) => dispatch({ 'password': e.target.value })}
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

                    <div className="mb-5">
                        <label htmlFor="confirm_password"
                               className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input type={showRepeatPassword ? "text" : "password"}
                                   id="confirm_password"
                                   className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                                   placeholder="@#*%"
                                   required
                                   name="confirm_password"
                                   value={state.confirm_password}
                                   onChange={(e) => dispatch({ 'confirm_password': e.target.value })}
                            />
                            <FontAwesomeIcon
                                icon={showRepeatPassword ? faEye : faEyeSlash}
                                style={{
                                    position: 'absolute',
                                    right: '5%',
                                    top: '30%',
                                    cursor: 'pointer'
                                }}
                                onClick={toggleRepeatPasswordVisibility}
                            />
                        </div>
                    </div>

                    <button type="submit"
                            className="mt-[2rem] text-[#F7FAFC] bg-[#00BB1E] h-14 font-baloo font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                        <div className="flex justify-center gap-2">
                            {isSigningUp ?
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
                            {isSigningUp ? "Signing you up..." : "Sign Up"}
                        </div>
                    </button>

                    <img src={Line2} className="mx-auto mt-[3rem]" alt="Line2" />

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <button
                                className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                         className="absolute left-0 w-5" alt="google logo" />
                                    <span
                                        className="block w-max font-baloo font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                                        Continue with Google
                                    </span>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button
                                className="w-full mt-[3rem] h-14 px-6 border-2 border-[#CBD5E0] rounded-full transition duration-300 hover:border-blue-400">
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img src="https://www.svgrepo.com/show/448224/facebook.svg"
                                         className="absolute left-0 w-5" alt="google logo" />
                                    <span
                                        className="block w-max font-baloo font-semibold tracking-wide text-[#67728A] text-[18px] transition duration-300 group-hover:text-blue-600 sm:text-base">
                                        Continue with Facebook
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <form className="max-w-xl mt-[2rem]" onSubmit={handleVerifyOtp}>
                    <div className="mb-5">
                        <label htmlFor="otp" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="mt-[2rem] text-[#F7FAFC] bg-[#00BB1E] h-14 font-baloo font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                        Verify OTP
                    </button>
                </form>
            )}
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

export default SignupForm;
