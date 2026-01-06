import React from "react";
import { FaShieldAlt, FaLeaf, FaTruck, FaShoppingCart, FaUndo, FaMedal } from "react-icons/fa";

const OutdoorFeatures = () => {
  const categories = [
    { title: "Telescope", img: "/telescope.png" },
    { title: "Watch", img: "/watch.png" },
    { title: "Scopes", img: "/Air-Rifle-Scopes-Explained-–-Everything-You-Need-to-Know.webp" },
    { title: "Binoculars", img: "/binoculars.png" },
    { title: "Night Vision", img: "/nightvision.png" },
  ];

  const features = [
    { icon: <FaMedal size={30} />, title: "BEST QUALITY", desc: "Crafted with precision and built to endure, our optics deliver" },
    { icon: <FaShieldAlt size={30} />, title: "MONEY SECURE", desc: "Crafted with precision and built to endure, our optics deliver" },
    { icon: <FaLeaf size={30} />, title: "ENVIRONMENT SAFE", desc: "Crafted with precision and built to endure, our optics deliver" },
    { icon: <FaTruck size={30} />, title: "FREE DELIVERY", desc: "Crafted with precision and built to endure, our optics deliver" },
    { icon: <FaShoppingCart size={30} />, title: "SHOP ONLINE", desc: "Crafted with precision and built to endure, our optics deliver" },
    { icon: <FaUndo size={30} />, title: "EASY RETURN", desc: "Crafted with precision and built to endure, our optics deliver" },
  ];

  return (
    <div className="bg-black text-white py-16">
      {/* Image Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative group h-64 md:h-80 overflow-hidden rounded-md"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
            {/* Default Bottom Text */}
            <div className="absolute bottom-3 left-3 text-lg font-semibold">
              {cat.title}
            </div>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-white font-semibold uppercase tracking-wide">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-extrabold mt-2">WHY CHOOSE US</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We offer premium outdoor optics trusted by adventurers, hunters,
            and nature lovers—delivering unbeatable clarity, rugged durability,
            expert support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#191919] p-6 rounded-md text-center hover:bg-gray-800 transition"
            >
              <div className="flex justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutdoorFeatures;
