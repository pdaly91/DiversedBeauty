import { useState } from "react";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div>
        {/* Mobile Version */}
        <div className="lg:hidden">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!menuToggle ? "h-0" : "h-full"}`}>
            Mobile Version
          </div>
        </div>
        {/* Desktop Version */}
        <div className="hidden lg:flex">
          Desktop Version
        </div>
      </div>
    </>
  )
};

export default Header;