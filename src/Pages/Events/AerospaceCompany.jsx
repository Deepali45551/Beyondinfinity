import React from "react";
import { motion } from "framer-motion";
import MarqueeComponent from "../portfolio/MarqueeComponent";
import FeaturedWork from "../../component/FeaturedWork";

const AerospaceCompany = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.img
          src="/aerpspace.png"
          alt="Spacecraft"
          className="absolute inset-0 w-full h-full object-cover"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-end justify-start h-full p-8">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-wide">
            SPACECRAFT
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <p className="text-sm text-white mb-4">/SERVICES</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Pushing the Boundaries of Aerospace
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/406617957_3fac3529-45e9-4e52-b17b-126b3daac905-1.webp"
              alt="Spacecraft"
              className="w-80 object-contain"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <ServiceCard
              icon="⚙️"
              title="Advanced Manufacturing"
              text="Our state-of-the-art manufacturing facilities produce precision aerospace components"
            />
            <ServiceCard
              icon="🚀"
              title="Aerospace Engineering"
              text="We specialize in cutting-edge aircraft and spacecraft design, integrating advanced"
            />
            <ServiceCard
              icon="🛰️"
              title="Satellite Systems"
              text="From low-Earth orbit to deep-space missions, we develop high-performance satellite"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-neutral-950 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src="/Image-2 (1).webp"
              alt="Astronaut and Engine"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-white text-sm mb-4">/ABOUT US</p>
            <h3 className="text-4xl font-bold mb-6">Building the Future of Aerospace</h3>
            <p className="text-neutral-400 mb-6">
              At  BeyondInfinities, we are driven by a passion for aerospace innovation and a commitment to advancing the boundaries.
            </p>
            <ul className="text-neutral-300 space-y-2 mb-6">
              <li><span className="font-semibold">Innovation:</span> Constantly evolving to stay</li>
              <li><span className="font-semibold">Integrity:</span> Upholding the highest ethical standards</li>
              <li><span className="font-semibold">Excellence:</span> Delivering high-quality, reliable</li>
            </ul>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium">
              About Us
            </button>
          </div>
        </div>
      </section>
      <MarqueeComponent/>
      <FeaturedWork/>
    </div>
  );
};

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
      <div className="text-white text-2xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 mb-4 text-sm">{text}</p>
      <a href="#" className="text-white text-sm">
        View Service
      </a>
    </div>
  );
}

export default AerospaceCompany;
