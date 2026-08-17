import { Link, Globe2 } from "lucide-react";

const Footer = () => {
  return (
    <div className=" w-full bg-surface border-t border-t-border">
      {/* ---FOOTER TOP SECTION --- */}
      <div className="h-full w-full grid tablet:grid-cols-2 laptop:grid-cols-4 gap-12 p-16">
        {/* ---FOOTER TOP 1ST CONTAINER --- */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl text-primary font-black font-display">
              FORMA Living
            </h2>
          </div>
          <p className="text-secondary text-lg text-sans font-medium font-body">
            Thoughtfully crafted furniture designed for the modern home.
            Architectural precision meeting editorial warmth.
          </p>
          <div className="flex gap-4 my-4">
            <Link className="cursor-pointer transition-transform duration-300 ease-out hover:scale-120" />
            <Globe2 className="cursor-pointer transition-transform duration-300 ease-out hover:scale-120" />
          </div>
        </div>
        {/* ---FOOTER TOP 2ND CONTAINER --- */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-md font-bold text-primary">THE BRAND</h3>
          </div>
          <div className="text-lg flex flex-col gap-2 font-body text-secondary">
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Craftsmanship
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Sustainability
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Our Story
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Showrooms
            </p>
          </div>
        </div>
        {/* ---FOOTER TOP 3RD CONTAINER --- */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-md font-bold text-primary ">SUPPORT</h3>
          </div>
          <div className="text-lg flex flex-col gap-2 font-body text-secondary">
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Contact Us
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Shipping & Returns
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Care Guide
            </p>
            <p className="cursor-pointer font-medium transition-color duration-300 hover:text-primary">
              Trade Program
            </p>
          </div>
        </div>
        {/* ---FOOTER TOP 4RD CONTAINER --- */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-md ">JOIN THE JOURNEY</h3>
          </div>
          <p className="font-medium text-lg text-secondary">
            Receive early access to new collection and design insights.
          </p>
          <div className="flex items-center gap-4 border-b-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none"
            />
            <button className="py-2 px-4 font-bold text-accent">JOIN</button>
          </div>
        </div>
      </div>
      {/* ---FOOTER BOTTOM SECTION --- */}
      <div className="h-40 w-full border-t border-t-border p-4 flex justify-center items-center">
        <p className="text-sm text-secondary font-body">
          © 2026 FORMA LIVING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
