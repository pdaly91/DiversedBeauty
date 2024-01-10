import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fixed min-h-64 py-8 flex lg:pl-10 lg:flex-row flex-col gap-8 justify-between items-center bottom-0 inset-x-0 bg-gray-100">
        {/* Logo / Socials */}
        <div className="flex-1">
          <div className="text-3xl font-thin">
            DIVERSED Beauty
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
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
            © Diversed Beauty
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