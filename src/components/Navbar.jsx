import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { navLogo, logIn, signUp } from "../imports";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSideMenu = () => {
    setIsShowSideMenu(!isShowSideMenu);
  };

  // const scrollToSection = id => {
  //   const bannerElement = document.getElementById(id);
  //   console.log("ajdka")
  //   if (bannerElement) {
  //     bannerElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="flex justify-between items-center px-3 sm:px-5 py-8">
      <div className="flex justify-center items-center">
        <Link to={"/"}>
          <img
            className="w-[125px] sm:w-auto pr-10"
            src={navLogo}
            alt="Site Logo"
          />
        </Link>
        {!isSmallScreen && (
          <>
            {/* <HashLink to="/#banner" className="px-3 py-2 hover:text-white duration-200 ease-in-out">HOME</HashLink> */}
            <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">HOME</Link>
            <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">NEWS</Link>
            <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">RANKING</Link>
          </>
        )}
      </div>

      <div className="flex justify-center items-center pr-4">
        {!isSmallScreen ? (
          <>
            <Link to={logIn} className="px-3 py-2 hover:text-white duration-200 ease-in-out">LOGIN</Link>
            <Link to={signUp} className="px-3 py-2 hover:text-white duration-200 ease-in-out">SIGN UP</Link>
          </>
        ) : (
          <button onClick={toggleSideMenu} className="focus:outline-none">
            <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22"></path>
              </g>
            </svg>
          </button>
        )}

        {/* Side Menu */}
        {isSmallScreen && (
          <div
            className={`fixed inset-y-0 right-0 bg-[#020202] z-[9999] pr-[-250px] w-64 transform transition-transform duration-300 ease-in-out ${isShowSideMenu ? 'translate-x-0' : 'translate-x-64'}`}>
              
            <div className="flex flex-col items-center pt-9">
              <Link to={"/"}>
                <img className="w-auto pb-10" src={navLogo} alt="Site Logo"/>
              </Link>

              <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">HOME</Link>
              <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">NEWS</Link>
              <Link to="#" className="px-3 py-2 hover:text-white duration-200 ease-in-out">RANKING</Link>

              <Link to={logIn} className="px-3 py-2 hover:text-white duration-200 ease-in-out">LOGIN</Link>
              <Link to={signUp} className="px-3 py-2 hover:text-white duration-200 ease-in-out">SIGN UP</Link>
            </div>
          </div>
        )}

        {/* Side Menu Overlay */}
        {isSmallScreen && isShowSideMenu && (
          <div
            className="fixed inset-0 bg-black opacity-50 cursor-pointer z-[9990]"
            onClick={toggleSideMenu}></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
