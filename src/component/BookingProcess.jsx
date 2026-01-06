import React from "react";
import { motion } from "framer-motion";

const BookingProcess = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-pink-500 uppercase text-sm tracking-wider">/How it Works</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          BOOKING PROCESS <br />
          <span className="text-white">(HOW IT WORKS)</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Side - Astronaut Image */}
       <div className="relative flex flex-col items-center gap-20">
      {/* Main Astronaut Image */}
      <img
        src="/Frame-14272.webp"
        alt="Astronaut"
        className="rounded-lg shadow-lg w-full max-w-md"
      />

      {/* Floating Jupiter Image with Animation */}
      <motion.img
        src="/wallpaper-v-1.webp"
        alt="Planet Jupiter"
        className="w-52 md:w-72"
        animate={{
          y: [0, -15, 0], // up and down floating
          rotate: [0, 360], // slow rotation
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>

        {/* Right Side - Booking Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-[#191919] p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                1
              </span>
              Choose Your Mission
            </h3>
            <p className="text-gray-400 mt-2">
              Select from our range of space tours: suborbital, orbital, or
              lunar. Pick the adventure that matches your goals and excitement
              level.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#191919]  p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                2
              </span>
              Book & Prepare
            </h3>
            <p className="text-gray-400 mt-2">
              Reserve your seat and receive a full schedule. We’ll guide you
              through medical screening, documentation, and training
              preparation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#191919]  p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                3
              </span>
              Train for Space
            </h3>
            <p className="text-gray-400 mt-2">
              Attend our world-class training program, including safety drills,
              zero-gravity simulations, and orientation with your mission crew.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#191919]  p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white mr-4">
                4
              </span>
              Launch & Experience
            </h3>
            <p className="text-gray-400 mt-2">
              Board your spacecraft and lift off! Enjoy breathtaking views,
              experience weightlessness, and return with a story few on Earth
              can tell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
