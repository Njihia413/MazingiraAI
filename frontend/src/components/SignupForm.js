import React, { useReducer } from "react";
import Line2 from "../assets/images/Line2.png";
import { objectReducer } from "../utils/reducers";
import { apiHost } from "../utils/apiHost";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [state, dispatch] = useReducer(objectReducer, {full_name: '', email: '', password: '', confirm_password: ''})
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    function handleSignup(e){
        e.preventDefault()

        if(state.password === state.confirm_password){
            fetch(`${apiHost}/signup`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(state),
            }).then(res => {
                if(res.ok){
                    res.json().then(d => {
                        const data = {
                            user: d.user,
                            accessToken: d.access_token
                        }
                        localStorage.setItem('data', btoa(JSON.stringify(data)))
                        setUserData(data)
                        navigate('/chat')
                    })
                }
            })
        } else {
            alert(`Passwords don't match`)
        }
    }

    return (
        <form className="max-w-xl mt-[2rem]" onSubmit={handleSignup}>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                    Full Names
                </label>
                <input type="text" id="fullNames"
                       className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                       placeholder="eg Jane Doe" required
                       value={state.full_name}
                       onChange={(e)=>dispatch({'full_name': e.target.value})}/>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                    E-mail
                </label>
                <input type="email" id="email"
                       className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                       placeholder="eg email@gmail.com" required
                       value={state.email}
                       onChange={(e)=>dispatch({'email': e.target.value})}/>
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                    Password
                </label>
                <input type="password" id="password"
                       className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                       placeholder="@#*%"
                       required
                       value={state.password}
                       onChange={(e)=>dispatch({'password': e.target.value})}/>
            </div>

            <div className="mb-5">
                <label htmlFor="confirmPassword" className="block mb-2 text-[18px] font-baloo font-medium text-[#718096]">
                    Confirm Password
                </label>
                <input type="password" id="confirmPassword"
                       className="bg-white border border-[#CBD5E0] font-baloo font-normal text-[#4A5568] text-[16px] rounded-[12px] w-full p-3"
                       placeholder="@#*%"
                       required
                       value={state.confirm_password}
                       onChange={(e)=>dispatch({'confirm_password': e.target.value})}/>
            </div>


            <button type="submit"
                    className="mt-[2rem] text-[#F7FAFC] bg-[#00BB1E] h-14 font-baloo font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                Create Account
            </button>

            <img src={Line2} className="mx-auto mt-[3rem]" alt="Line2"/>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
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
                </div>

                <div>
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
                </div>
            </div>
        </form>
    )
}

export default SignupForm;
