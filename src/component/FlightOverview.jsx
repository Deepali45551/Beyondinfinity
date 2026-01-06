import React from "react";
import { motion } from "framer-motion";

const FlightOverview = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-between px-6 md:px-20 py-16 overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-10">
        {/* Left Side */}
        <div>
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            DEMOCRATIZING ACCESS <br /> TO SPACE AND <br /> ITS RESOURCES
          </h2>
        </div>

        {/* Right Side */}
        <div className="relative mt-8">
          <h1 className="absolute -top-14 -left-10 text-[9rem] font-extrabold text-white/5 select-none hidden lg:block leading-none">
             BeyondInfinities
          </h1>
          <p className="text-gray-300 text-2xl relative z-10 max-w-lg">
            Beyond Infinities is a space technology startup poised to offer innovative, cost-effective, and vertically integrated solutions. We aim to push the boundaries of what is possible, bringing the benefits of space exploration and utilization closer to all of humanity.
          </p>
        </div>
      </div>

      {/* Bottom Timeline Section - updated for Beyond Infinities' business segments */}
      <div className="flex items-center justify-center space-x-16 mt-24 z-10 mb-10">
        {/* Launch Solutions Segment */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-32 h-72 flex items-center justify-center">
            <img
              src="/Rocket-Image.webp"
              alt="Beyond Infinities Launch Solutions"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* 4 Hours - Updated text for Launch */}
        <div className="flex items-center justify-center">
          <p className="underline text-gray-300 text-xl font-semibold">Launch</p>
        </div>

        {/* In-space services Segment */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-40 h-72 flex items-center justify-center">
            <img
              src="/Shuttle-Image.webp"
              alt="Beyond Infinities In-Space Services"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* 48 Hours - Updated text for In-space Services */}
        <div className="flex items-center justify-center">
          <p className="underline text-gray-300 text-xl font-semibold">On-Orbit</p>
        </div>

        {/* Earth Observation Segment */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex flex-col items-center"
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden border border-gray-700 shadow-lg">
            <img
              src="/Moon-Image.webp"
              alt="Beyond Infinities Earth Observation"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlightOverview