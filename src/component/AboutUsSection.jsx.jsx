// File: AboutUsSection.jsx

import React from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Astronaut Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col items-center text-center lg:text-left"
        >
          <motion.img
            src="/Image-7.webp"
            alt="Astronaut"
            className="w-full max-w-md rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="mt-4 text-sm max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At  BeyondInfinities, we believe space is not the final frontier—it's the next
            destination. We're on a mission to make the dream of space
            exploration accessible to everyone, not just astronauts.
          </motion.p>
        </motion.div>

        {/* Right Planet & Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col items-center text-center lg:text-left"
        >
          <motion.p
            className="text-pink-500 text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            /ABOUT US
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            CRAFTING THE FUTURE OF EXPLORATION
          </motion.h2>
          <motion.img
            src="/Image-1-1 (1).webp"
            alt="Planet"
            className="w-full max-w-xs rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="transition-transform duration-300"
        >
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-400 text-sm">People</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="transition-transform duration-300"
        >
          <h3 className="text-3xl font-bold">465</h3>
          <p className="text-white text-sm">Projects</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="transition-transform duration-300"
        >
          <h3 className="text-3xl font-bold">12+</h3>
          <p className="text-gray-400 text-sm">Years</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="transition-transform duration-300"
        >
          <h3 className="text-3xl font-bold">256</h3>
          <p className="text-gray-400 text-sm">Cities</p>
        </motion.div>
      </div>

      {/* Floating Astronaut */}
      <motion.img
        src="/XMLID_13090_.webp"
        alt="Floating Astronaut"
        className="hidden md:block absolute top-16 right-8 w-32"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default AboutUsSection;