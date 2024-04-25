import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "./Chat";
import About from "./About";
import { useState } from "react";
import { UserContext } from "../context/user";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('data'))
  
  return (
    <div className="App">
      <UserContext.Provider value={{loggedIn, setLoggedIn}}>
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
