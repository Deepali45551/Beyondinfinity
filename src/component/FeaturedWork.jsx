import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiMessageSquare, FiHelpCircle } from "react-icons/fi";
import FeaturedProducts from "./FeaturedProducts";
const FeaturedWork = () => {
  const testimonials = [
    {
      name: "Miranda Bloom",
      role: "Cosmetics",
      review:
        "I've used many optics over the years, but nothing compares to the clarity and durability of the gear I bought here. Whether I'm hiking, birdwatching, or sporting, I trust this shop completely. Great service, fast shipping—highly recommend!",
    },
    {
      name: "John Carter",
      role: "Engineer",
      review:
        "Outstanding quality and customer support. The products are reliable and innovative. A true leader in aerospace and tech solutions.",
    },
    {
      name: "Sophia Lee",
      role: "Tech Enthusiast",
      review:
        "Amazing design and smooth functionality. Their team really knows how to deliver top-notch products for future mobility and aerospace.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Featured Work Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h4 className="text-white mb-2 uppercase tracking-wide">Your Work</h4>
          <h2 className="text-4xl font-bold">Featured Work</h2>
          <button className="border border-white rounded-full px-6 py-2 mt-6 hover:bg-white hover:text-black transition">View all</button>
        </div>

        <div className="grid gap-16">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <img src="/Product-Image.webp" alt="Drone" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">1. Stratos-X</p>
              <h3 className="text-xl font-semibold mb-2">Next-Gen High-Altitude Surveillance Drone</h3>
              <p className="text-gray-300 mb-4">Designed for long-endurance missions at the edge of the stratosphere.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <img src="/Product-Image-1.webp" alt="Rocket" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">2. Chronos Launch System</p>
              <h3 className="text-xl font-semibold mb-2">Reusable Orbital Launch Platform</h3>
              <p className="text-gray-300 mb-4">A cost-effective, partially reusable rocket system developed.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <img src="/Product-Image-2 (1).webp" alt="Engine" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">3. VortexOne</p>
              <h3 className="text-xl font-semibold mb-2">Advanced Jet Propulsion Engine</h3>
              <p className="text-gray-300 mb-4">An all-efficient turbine engine engineered for modern commercial use.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <img src="/Product-Image-3.webp" alt="Car" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">4. AetherAir</p>
              <h3 className="text-xl font-semibold mb-2">Autonomous Electric Air Taxi</h3>
              <p className="text-gray-300 mb-4">A fully electric VTOL aircraft designed for sustainable urban air mobility.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div>

          {/* Item 5 */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <img src="/space-satellite.webp" alt="Satellite" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">5. AstroLink</p>
              <h3 className="text-xl font-semibold mb-2">Next-Generation Satellite System</h3>
              <p className="text-gray-300 mb-4">High-capacity satellite communication for global coverage.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div>

          {/* Item 6 */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <img src="/mars-rover.webp" alt="Mars Rover" className="rounded-lg shadow-lg w-full md:w-1/2" />
            <div>
              <p className="uppercase text-sm text-gray-400 mb-2">6. MarsExplorer</p>
              <h3 className="text-xl font-semibold mb-2">Autonomous Rover for Planetary Exploration</h3>
              <p className="text-gray-300 mb-4">Designed for harsh environments and deep-space missions.</p>
              <a href="#" className="text-white hover:underline">Learn more</a>
            </div>
          </motion.div> */} 
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-neutral-900 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <h4 className="text-white mb-2 uppercase tracking-wide">Testimonial</h4>
          <h2 className="text-3xl font-bold mb-8">Our Happy Customers</h2>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 mb-6">{testimonials[currentIndex].review}</p>
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
          <FeaturedProducts/>

      <div className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-white uppercase tracking-widest text-sm mb-4">
          Support Center
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Need help? Contact to <br />  BeyondInfinities
        </h1>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-neutral-900 p-8 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FiMessageSquare className="text-3xl" />
            <h2 className="text-xl font-semibold">Open Live Chat</h2>
          </div>
          <p className="text-gray-300 text-sm">
             BeyondInfinities to feel like a natural extension of your
          </p>
          <a href="#" className="text-white font-medium mt-2">
            Send message
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-neutral-900 p-8 rounded-lg flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FiHelpCircle className="text-3xl" />
            <h2 className="text-xl font-semibold">Read FAQs</h2>
          </div>
          <p className="text-gray-300 text-sm">
             BeyondInfinities to feel like a natural extension of your
          </p>
          <a href="#" className="text-white font-medium mt-2">
            Send message
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturedWork;
