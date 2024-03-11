import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
