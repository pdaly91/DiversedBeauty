import { Link } from "react-router-dom";
import Logo from '../assets/Shortened_Logo_Brown.png';

const Footer = () => {
  return (
    <>
      <div className="min-h-64 py-8 flex lg:pl-10 lg:flex-row flex-col gap-8 justify-between items-center bottom-0 inset-x-0 bg-[url('/src/assets/Banner_Temp.jpg')] bg-cover">
        {/* Logo / Socials */}
        <div className="flex-1">
          <div className="text-3xl font-thin w-32">
            <img
              src={Logo}
              alt="Diversed Beauty"
              className="w-full"
            />
          </div>
          <div className="flex flex-row gap-4 ml-0 lg:ml-6 justify-center lg:justify-start">
            <div className="font-thin">IG</div>
            <div className="font-thin">FB</div>
            <div className="font-thin">LI</div>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-row content-center gap-4 font-light">
            <Link to={'/'} className="m-auto cursor-pointer hover:underline">Home</Link>
            <Link to={'/about'} className="m-auto cursor-pointer hover:underline">About</Link>
            <Link to={'/policies'} className="m-auto cursor-pointer hover:underline">Policies</Link>
            <Link to={'/contact'} className="m-auto cursor-pointer hover:underline">Contact</Link>
          </div>
          <div className="text-sm font-light text-center">
            © Diversed Beauty LLC
          </div>
        </div>
        {/* @ & Hashtag */}
        <div className="flex-1 m-4 lg:mr-10 font-light text-right text-center">
          <div>
            @WeAreDiversed
          </div>
          <div>
            #DiversedBeauty
          </div>
        </div>
      </div>
    </>
  )
};

export default Footer;