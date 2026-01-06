import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress, FaCheck } from "react-icons/fa";

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Just show the message, no backend
    setSubmitted(true);
    setEmail("");

    // Hide after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-black text-white py-10">
      {/* Logo Section */}
      <div className="flex justify-center space-x-20 mb-12 opacity-50">
        {/* <img src="/path-to/spacex-logo.png" alt="SpaceX" className="h-10" />
        <img src="/path-to/nasa-logo.png" alt="NASA" className="h-10" />
        <img src="/path-to/ssl-logo.png" alt="SSL" className="h-10" /> */}
      </div>

      {/* Newsletter */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-lg font-semibold mb-4 uppercase">
          Subscribe to Newsletter
        </h2>

        {submitted ? (
          <div className="flex flex-col items-center bg-white text-black p-6 rounded-md shadow-md w-80 text-center">
            <FaCheck className="text-3xl mb-2" />
            <p className="text-sm font-medium">
              Thank you! Form submitted successfully.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex items-center border-b border-gray-700 w-1/2 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail address"
              className="bg-transparent outline-none flex-1 py-2 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="ml-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>
        )}
      </div>

      {/* Links */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Shop</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-white"><FaWordpress /></a>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
