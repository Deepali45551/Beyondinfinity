import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Counter Component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMilSecDur / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Stars */}
        <div className="absolute inset-0">
          <img
            src="homepageimages1.png"
            alt="Space Background"
            className="w-full h-full object-cover opacity-90 scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Moving Planet (disabled but ready) */}
        <motion.img
          // src="/homepageimages1.png"
          // alt="Planet"
          // className="absolute w-[700px] h-[700px] object-contain opacity-95"
          // animate={{ rotate: 360 }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 60,
          //   ease: "linear",
          // }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center w-full max-w-4xl px-6"
        >
          {/* Active Mission Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            <span className="text-sm uppercase tracking-widest">
              Active Mission
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Beyond Infinities: <br /> Democratizing Access to Space
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Innovative space technology and services for a new era of exploration.
            Our mission is to make space more accessible, affordable, and
            beneficial to all of humanity.
          </motion.p>

          {/* CTA Button */}
          {/* <motion.a
            href="/services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mb-16"
          >
            Explore Our Services
          </motion.a> */}

          {/* Hero Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "May Object List", subtitle: "Night Sky Observing Challenge" },
              { title: "Orbit Science Highlights", subtitle: "New E-Book" },
              { title: "Hearing Orbit", subtitle: "Online Activities" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.3, duration: 0.8 }}
                className="border-t border-gray-600 pt-6"
              >
                <p className="uppercase text-sm text-gray-400 tracking-widest mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-semibold cursor-pointer hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative w-full bg-black text-white overflow-hidden">
        <div className="w-full px-6 py-20">
          <div className="max-w-7xl mx-auto relative">
            <motion.img
              initial={{ opacity: 0, x: -150, y: -100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="Vector.webp"
              alt="Astronaut"
              className="absolute -left-16 md:-left-24 lg:-left-32 top-0 w-56 md:w-72 lg:w-96 opacity-90"
            />

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mb-16 ml-28 md:ml-40 lg:ml-56"
            >
              <p className="text-sm uppercase text-white mb-4 tracking-wider">
                About BeyondInfinities
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                REACHING BEYOND <br /> FOR A BETTER WORLD
              </h2>
            </motion.div>

            {/* Image + Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 relative z-10">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.img
                  src="/Imagehome1.png"
                  alt="Astronaut on mission"
                  className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-cover rounded-lg shadow-lg shadow-cyan-500/30"
                  style={{ y: yParallax }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                />
              </motion.div>

              {/* Right Image + Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col items-center lg:items-start"
              >
                <motion.img
                  src="/Image-1-1.webp"
                  alt="Astronaut in space"
                  className="w-4/5 md:w-3/4 lg:w-2/3 h-auto object-cover rounded-lg shadow-lg shadow-purple-500/30"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                />
                <p className="text-base text-gray-300 leading-relaxed text-center lg:text-left">
                  Founded with a vision to advance science and technology, we
                  bring together top engineers, scientists, and visionaries to
                  push the boundaries of what's possible. Every satellite we
                  launch, and every partnership we forge.
                </p>
              </motion.div>
            </div>

            {/* Stats Section with Counter Effect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              {[
                { number: "465", label: "Completed Missions" },
                { number: "420", label: "Total Landings" },
                { number: "391", label: "Total Reflights" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    <Counter target={stat.number} duration={2} />
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
