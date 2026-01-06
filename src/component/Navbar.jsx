import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCart } from "../pages/shop/CartContext";

import {
  FaChevronDown,
  FaChevronUp,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { cart } = useCart();

  const handleScroll = () => {
    setAtTop(window.scrollY <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Direct pages (no dropdown)
  const menuItems = [
    "Space Agency",
    "Outdoor Optics Shop",
    "Observatory",
    "Aerospace Company",
    "Space Tourism",
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        atTop ? "bg-transparent" : "bg-[#0b0b0b] shadow-md"
      }`}
      style={{
        backgroundImage: atTop ? "url('/your-hero-image.jpg')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[90rem] mx-auto px-12 flex items-center h-20">
        {/* Logo on far left */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-white font-bold text-xl"
        >
          <img src="/prerna/bi-wht.png" alt=" BeyondInfinities" className="h-10 w-24" />
        </Link>

        {/* Push everything else to the right */}
        <div className="ml-auto flex items-center space-x-10">
          {/* Pages left to right but aligned right */}
          <ul className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-white hover:text-white font-medium transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Join Us button */}
          <Link to="/">
            <button className="bg-red-500 px-6 py-2 rounded-md text-white font-medium hover:bg-red-600 transition">
              Join Us
            </button>
          </Link>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-3xl"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0b0b] text-white px-4 py-4 space-y-2">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <Link
                to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-medium hover:text-white"
              >
                {item}
              </Link>
            </div>
          ))}

          <Link to="/">
            <button className="bg-red-500 px-4 py-2 rounded-md text-white font-medium hover:bg-red-600 transition w-full">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
