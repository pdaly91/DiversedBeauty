import { useState } from "react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div className="flex flex-row m-auto h-20 items-center justify-center">
        {/* Mobile Version */}
        <div className="lg:hidden flex-1">
          <button className="cursor-pointer duration-300 hover:scale-110 my-2 mx-2" onClick={() => setMenuToggle(!menuToggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!menuToggle ? "h-0" : "h-full"}`}>
            <div className="flex flex-col content-center w-full">
              <div className="m-auto">Home</div>
              <div className="m-auto">Products</div>
              <div className="m-auto">About</div>
              <div className="m-auto">Contact</div>
            </div>
          </div>
        </div>
        {/* Desktop Version */}
        <div className="hidden lg:flex">
          Desktop Version
        </div>
        {/* Logo */}
        <div className="m-2">
          DIVERSED Beauty
        </div>
        {/* empty div to get Logo centered */}
        <div className="flex-1"></div>
      </div>
    </>
  )
};

export default Header;