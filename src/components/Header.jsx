import { useState } from "react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div className="flex flex-row m-auto h-20 items-center justify-center bg-gray-100">
        {/* empty div to get Logo centered */}
        <div className="flex-1"></div>
        {/* Logo */}
        <div className="m-2 text-3xl font-thin">
          DIVERSED Beauty
        </div>
        {/* Mobile Version */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button className="cursor-pointer duration-300 hover:scale-110 my-2 mr-10" onClick={() => setMenuToggle(!menuToggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className={`fixed z-40 left-0 top-20 right-0 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden origin-top duration-700 ${!menuToggle ? "h-0" : "h-full"}`}>
            <div className="flex flex-col content-center w-full gap-4 font-light">
              <div className="m-auto cursor-pointer hover:underline">Home</div>
              <div className="m-auto cursor-pointer hover:underline">Products</div>
              <div className="m-auto cursor-pointer hover:underline">About</div>
              <div className="m-auto cursor-pointer hover:underline">Contact</div>
            </div>
          </div>
        </div>
        {/* Desktop Version */}
        <div className="hidden lg:flex flex-1 justify-end">
          <div className="flex flex-row gap-4 w-1/2 justify-evenly mr-10 font-light">
            <div className="m-auto cursor-pointer hover:underline">Home</div>
            <div className="m-auto cursor-pointer hover:underline">Products</div>
            <div className="m-auto cursor-pointer hover:underline">About</div>
            <div className="m-auto cursor-pointer hover:underline">Contact</div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;