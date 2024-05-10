import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "./Chat";
import About from "./About";
import { useEffect, useState } from "react";
import { UserContext } from "../context/user";
import { apiHost } from "../utils/vars";

function App() {
  const data = localStorage.getItem('data')
  const localStorageData = data? JSON.parse(atob(localStorage.getItem('data'))) : null
  const [userData, setUserData] = useState(localStorageData)
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorageData.accessToken){
      fetch(`${apiHost}/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorageData.accessToken}`
        }
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
          }else {
            localStorage.clear()
            setUserData(null)
          }
      })
    } else {
      localStorage.clear()
      setUserData(null)
    }
  }, [])

  function loggedIn(){
    return !!userData
  }

  function logout(){
    localStorage.clear()
    setUserData(null)
  }
  
  return (
    <div className="App">
      <UserContext.Provider value={{loggedIn, logout, userData, setUserData}}>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
