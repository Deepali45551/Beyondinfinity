import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const messages = [
    "/ 50+ Missions Completed",
    "/ 12 Satellites in Orbit",
    "/ Vision: A Better Tomorrow",
    "/ Advancing Space Technology",
    "/ Empowering Scientific Discovery",
    "/ Protecting Our Planet",
    "/ AI-Powered Satellites",
  ];

  return (
    <div className="bg-black py-4">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="text-white text-4xl font-semibold"
      >
        {messages.map((msg, index) => (
          <span key={index} className="mx-8">
            {msg}
          </span>
        ))}
      </Marquee>
      <div className="flex items-center justify-center">
        <p className="text-white text-4xl font-semibold mt-12">
          Your journey starts here! Let’s talk!
        </p>
      </div>
    </div>
  );
};

export default MarqueeComponent;
