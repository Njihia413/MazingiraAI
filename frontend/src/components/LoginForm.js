import React, { useReducer } from "react";
import Line2 from "../assets/images/Line2.png";
import { apiHost } from "../utils/vars";
import { objectReducer } from "../utils/reducers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";


const LoginForm = () => {
    const [state, dispatch] = useReducer(objectReducer, {email: '', password: ''})
    const { setLoggedIn, setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        
        fetch(`${apiHost}/login`, {
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
                    setLoggedIn(true)
                    navigate('/chat')
                })
            }
        })
    }

    return (
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

            <div className="flex items-center justify-between mb-5">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                               className="w-4 h-4 border border-[#CFD9E0] rounded bg-white"
                               required/>
                    </div>

                    <div className="">
                        <label htmlFor="remember" className="ms-2 text-[16px] font-baloo font-normal text-[#718096]">
                            Remember me
                        </label>
                    </div>
                </div>
                <a href="/forgot-password"
                   className="text-[16px] font-baloo font-medium text-[#A19B9B] underline hover:no-underline dark:text-primary-500">
                    Forgot password?
                </a>
            </div>

            <button type="submit"
                    className="mt-[2rem] text-[#F7FAFC] bg-[#00BB1E] h-14 font-baloo font-semibold rounded-[20px] text-[20px] w-full px-5 py-2.5 text-center">
                Sign in
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
    )
}

export default LoginForm;