import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isNavbarTop, setIsNavbarTop] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 108) {
        setIsNavbarTop(true);
      } else {
        setIsNavbarTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      style={{
        fontFamily: "Avenir",
        position: isNavbarTop ? "fixed" : "absolute",
        backgroundColor: isNavbarTop ? "white" : "transparent",
        color: isNavbarTop ? "black" : "black",
        transition: "all 0.5s",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? "1" : "0",
      }}
      className="h-24 z-50 w-full flex justify-between items-center"
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className={`${
          isNavbarTop ? "text-black" : "text-white"
        } flex-1 flex justify-start items-center gap-5 ml-5 cursor-pointer`}
      >
        <img src="/sipallogo.jpeg" alt="" className="rounded-full w-10 h-10" />
        <p className="text-2xl font-bold">Sipal</p>
      </div>
      <div>
        <ul className="flex justify-center">
          <li>
            <a
              className={`${
                isNavbarTop ? "text-black" : "text-white"
              } p-8 text-base hover:font-bold cursor-pointer`}
              onClick={() => {
                navigate("/about");
              }}
            >
              About Palembang
            </a>
          </li>
          <li>
            <a
              className={`${
                isNavbarTop ? "text-black" : "text-white"
              } p-8 text-base hover:font-bold cursor-pointer`}
              onClick={() => {
                navigate("/tips");
              }}
            >
              Practical Tips
            </a>
          </li>
          <li>
            <a
              className={`${
                isNavbarTop ? "text-black" : "text-white"
              } p-8 text-base hover:font-bold cursor-pointer`}
              onClick={() => {
                navigate("/destination");
              }}
            >
              Places To Go
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8"></div>
    </nav>
  );
}

export default Navbar;
