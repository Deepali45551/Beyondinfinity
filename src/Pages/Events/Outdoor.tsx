import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FeaturedProducts from "../../component/FeaturedProducts";
import OutdoorFeatures from "../../component/OutdoorFeatures";
import OpticsProductShowcase from "../../component/OpticsProductShowcase";
import BlogSection from "../../component/BlogSection";
import NewsletterFooter from "../../component/NewsletterFooter";

const Outdoor = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-black">
        {/* Background Image */}
        <img
          src="/razvan-mirel-t8i4N3VEGKk-unsplash-1.webp"
          alt="Telescope"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            NIGHT. VISION. <br /> UNLEASHED.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl">
            Discover precision–crafted optics built for adventure. Whether
            you're tracking wildlife or scanning distant horizons, experience
            unmatched clarity, rugged performance—day or night.
          </p>

          {/* Slider Controls */}
          <div className="flex items-center gap-4 mt-10">
            <button className="p-3 rounded-full border border-white hover:bg-white/20">
              <IoIosArrowBack size={20} />
            </button>
            <span className="text-lg font-medium">01 / 05</span>
            <button className="p-3 rounded-full border border-white hover:bg-white/20">
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-5 z-10">
          <a href="#" className="p-3 rounded-full bg-black/70 hover:bg-white/20">
            <FaFacebookF />
          </a>
          <a href="#" className="p-3 rounded-full bg-black/70 hover:bg-white/20">
            <FaInstagram />
          </a>
          <a href="#" className="p-3 rounded-full bg-black/70 hover:bg-white/20">
            <FaTimes />
          </a>
          <a href="#" className="p-3 rounded-full bg-black/70 hover:bg-white/20">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Featured Products Section */}
      <FeaturedProducts />
      <OutdoorFeatures/>
      <OpticsProductShowcase/>
      <BlogSection/>
      <NewsletterFooter/>
    </div>
  );
};

export default Outdoor;
