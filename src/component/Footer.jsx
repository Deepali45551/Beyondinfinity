import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 relative">
      {/* Background Moon image */}
      <div className="absolute inset-0">
        <img
          src="/Footerimages.png" // replace with your background image path
          alt="moon"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src="/logo.png" alt=" BeyondInfinities Logo" className="w-8 h-8" /> */}
            <h2 className="text-white text-xl font-bold"> BeyondInfinities</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            We explore the universe with advanced technology, driving innovation
            and discovery to benefit all humanity.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about-us" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-white">
                Faqs
              </a>
            </li>
            <li>
              <a href="/teams" className="hover:text-white">
                Teams
              </a>
            </li>
            <li>
              <a href="/team-details" className="hover:text-white">
                Team Details
              </a>
            </li>
            <li>
              <a href="/our-services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/service-details" className="hover:text-white">
                Service Details
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Address</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail className="text-lg" />
               BeyondInfinities@example.com
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-lg" />
              1750 Ranchero Rd, Kerrville, Texas 78028
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-lg" />
              (+987) 123 456 789 77
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Stay informed with  BeyondInfinities by subscribing to our newsletter.
          </p>
          <form className="flex">
            <div className="flex items-center bg-gray-900 px-3 w-full">
              <MdEmail className="text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent w-full py-3 px-2 text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-5 flex items-center justify-center"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © 2025 Your  BeyondInfinities. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
