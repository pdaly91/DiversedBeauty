const Footer = () => {
  return (
    <>
      <div className="fixed h-64 flex flex-row justify-between items-center bottom-0 inset-x-0 bg-gray-100">
        {/* Logo / Socials */}
        <div className="m-4 ml-10">
          <div className="text-3xl font-thin">
            DIVERSED Beauty
          </div>
          <div className="flex flex-row gap-4">
            <div className="font-thin">IG</div>
            <div className="font-thin">FB</div>
            <div className="font-thin">LI</div>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row content-center gap-4 font-light">
            <div className="m-auto cursor-pointer hover:underline">Home</div>
            <div className="m-auto cursor-pointer hover:underline">Products</div>
            <div className="m-auto cursor-pointer hover:underline">About</div>
            <div className="m-auto cursor-pointer hover:underline">Contact</div>
          </div>
          <div className="text-sm font-light text-center">
            © Diversed Beauty
          </div>
        </div>
        {/* @ & Hashtag */}
        <div className="m-4 mr-10 font-light">
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