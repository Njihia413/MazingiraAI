import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "./Chat";
import About from "./About";
import Contact from "./Contact";
import FourOFour from "./FourOFour";
import Blogs from "./Blogs";
import BlogDetails from "./BlogDetails";
import Map from "./Map";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/map" element={<Map />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogs/:blogId" element={<BlogDetails/>} />
            <Route path="*" element={<FourOFour/>}/>
        </Routes>
    </div>
  );
}

export default App;
