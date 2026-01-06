import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textSlides = [
  "MISSION: A BETTER TOMORROW",
  "INNOVATING FOR THE FUTURE",
  "EXPLORING BEYOND LIMITS",
  "BUILDING A SUSTAINABLE SPACE"
];

const TextCarousels = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 bg-black flex items-center justify-center overflow-hidden mt-10">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="text-4xl md:text-6xl font-bold text-white absolute"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7 }}
        >
          {textSlides[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Dots navigation */}
      <div className="absolute bottom-4 flex gap-2">
        {textSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Left/Right buttons */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + textSlides.length) % textSlides.length)
        }
        className="absolute left-4 text-white text-2xl"
      >
        ❮
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % textSlides.length)}
        className="absolute right-4 text-white text-2xl"
      >
        ❯
      </button>
    </div>
  );
};

export default TextCarousels;
