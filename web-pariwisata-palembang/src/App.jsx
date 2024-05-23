import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "@/pages/Home";
import Tips from "@/pages/Tips";
import Destination from "@/pages/Destination";
import About from "@/pages/About";
import Navbar from "./components/global/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./components/global/Footer";

function App() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
