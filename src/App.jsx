import "./App.css";
import Previous from "./events/previous";
import { useState } from "react";
import Hero4 from "./hero-section4/hero-sect4";
import Footer from './Footer/Footer'
import Hero2 from "./hero2/hero2.jsx";
import Hero5 from "./Hero5.jsx";
import Hero3 from "./hero3.jsx";
import HomePage from "./pages/homePage.jsx";
import Navbar from "./Navbar.jsx";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Navbar/>
    <HomePage/>
      <Hero2 />
       <Hero4 />
       <Hero3 />
       <Hero5/>
       <Previous/>
       <Footer />
    </>
    
  );
}

export default App;