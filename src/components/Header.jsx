import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo_1.png';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div className="flex flex-col m-auto min-h-20 items-center justify-center bg-[url('/src/assets/Banner_Temp.jpg')] bg-cover">
        {/* Established */}
        <div className="flex-1 mt-12 mb-2 text-xl font-thin">
          Est. <span className="whitespace-pre text-3xl">  |  </span> 2023
        </div>
        {/* Logo */}
        <div className="my-8 text-3xl font-thin w-2/3">
          <img
            src={Logo}
            alt="Diversed Beauty"
            className="w-full"
          />
        </div>
        {/* Mobile Version */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button className="cursor-pointer duration-300 hover:scale-110 mb-8" onClick={() => setMenuToggle(!menuToggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className={`fixed z-40 left-0 top-0 right-0 w-full bg-main-light overflow-hidden flex flex-col lg:hidden origin-top duration-700 ${!menuToggle ? "h-0 pt-0" : "h-full pt-32"}`}>
            <div className="flex flex-col content-center items-center w-full gap-8 font-light">
              <button className="cursor-pointer duration-300 hover:scale-110" onClick={() => setMenuToggle(!menuToggle)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <Link to={'/'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Home</Link>
              <Link to={'/about'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">About</Link>
              <Link to={'/policies'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Policies</Link>
              <Link to={'/contact'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Contact</Link>
            </div>
          </div>
        </div>
        {/* Desktop Version */}
        <div className="hidden lg:flex flex-1 justify-end">
          <div className="flex flex-row gap-8 mb-8 justify-evenly font-light text-white">
            <Link to={'/'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Home</Link>
            <Link to={'/about'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">About</Link>
            <Link to={'/policies'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Policies</Link>
            <Link to={'/contact'} onClick={() => setMenuToggle(false)} className="m-auto cursor-pointer hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;