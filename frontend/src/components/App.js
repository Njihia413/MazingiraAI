import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "./Chat";
import About from "./About";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
