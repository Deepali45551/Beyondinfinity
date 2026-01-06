import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const missions = [
  {
    title: "Exploring the Edge of the...",
    status: "Active",
    date: "March 18, 2025",
    summary: "Magnetic fields, and the influence of the Sun far beyond...",
    img: "/photo-1451187580459-43490279c0fa-1.webp",
  },
  {
    title: "Europa Ice Drill Probe",
    status: "In Development",
    date: "Early 2026",
    summary: "The Europa Ice Drill Probe project was developed to penetrate...",
    img: "/photo-1614728894747-a83421e2b9c9-1.webp",
  },
  {
    title: "Titan Balloon Explorer",
    status: "In Development",
    date: "October 2027",
    summary: "Titan Balloon Explorer was conceptualized as an aerial observatory...",
    img: "/Product-image-2.webp",
  },
  {
    title: "HelioWatch Solar Observatory",
    status: "Active",
    date: "October 2024",
    summary: "Positioned at L1, HelioWatch tracks solar flares with a 0.1-arcsecond...",
    img: "/Main-Image.webp",
  },
];

const FeaturedMissions = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % missions.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + missions.length) % missions.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Top Image + Heading */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mb-16 gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/4 flex justify-start">
          <motion.img
            src="/Group-512973.webp"
            alt="Featured"
            className="rounded-lg shadow-lg w-2/3 object-cover"
            animate={{ rotate: [0, 360], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </div>

        {/* Right Heading */}
        <div className="w-full md:w-3/4 text-center md:text-left pl-6">
          <p className="text-xl text-white uppercase tracking-wide mb-4 font-semibold">
            Are you ready?
          </p>
          <h2 className="text-5xl font-extrabold leading-snug">
            Featured Missions & Projects
          </h2>

          {/* Subheadline content added */}
          <p className="text-lg text-gray-300 mt-6 max-w-2xl">
            Innovative space technology and services for a new era of exploration. 
            Our mission is to make space more accessible, affordable, 
            and beneficial to all of humanity.
          </p>

          {/* CTA button */}
          <a
            href="/services"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {missions.map((mission, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-4"
              >
                {missions.map((card, j) => (
                  <div
                    key={j}
                    className="bg-[#1A1A1A] rounded-md shadow-md p-5 flex flex-col"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-48 w-full object-cover rounded mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="flex items-center text-sm text-gray-400 mb-1">
                      <span className="text-white mr-2">●</span>
                      Status: {card.status}
                    </p>
                    <p className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="text-white mr-2">📅</span>
                      Launch Date: {card.date}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold">Mission Summary:</span>{" "}
                      {card.summary}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center border border-white hover:bg-white/10 transition"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center border border-white hover:bg-white/10 transition"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full mt-26">
        <div className="relative w-full h-[80vh]">
          <img src="/Home25.png" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/20 hover:bg-white/40 p-6 rounded-full transition">
              <Play className="text-white w-10 h-10" fill="red" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-black text-white py-16 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                THE FUTURE BEGINS <br /> BEYOND EARTH
              </h2>
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed">
                Humanity has always looked to the stars with wonder, but today, 
                we go beyond admiration—we take action. <br />
                <span className="font-medium text-white">
                  "The Future Begins Beyond Earth"
                </span>{" "}
                is not just a belief; it’s a guiding principle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="border-t border-gray-700 pt-6">
              <h3 className="flex items-center space-x-2 font-semibold mb-2">
                <span>EARTH OBSERVATION</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Earth Observation helps us monitor our planet in real-time, 
                providing critical data on climate.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h3 className="flex items-center space-x-2 font-semibold mb-2">
                <span>Communications</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Communications help us monitor our planet in real-time, 
                providing critical signals and data.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h3 className="flex items-center space-x-2 font-semibold mb-2">
                <span>EARTH OBSERVATION</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Earth Observation helps us monitor our planet in real-time, 
                providing critical data on climate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMissions;
  