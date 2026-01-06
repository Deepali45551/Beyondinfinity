import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/Image-2.webp",
    title: "Light & Shadow Festival",
  },
  {
    src: "/Image-3-1.webp",
    title: "Light & Shadow Festival",
  },
  {
    src: "/Image-2-1.webp",
    title: "Light & Shadow Festival",
  },
  {
    src: "/Image-5.webp",
    title: "Light & Shadow Festival",
  },
];

// Duplicate images for seamless repeat
const repeatedImages = [...images, ...images];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % repeatedImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + repeatedImages.length) % repeatedImages.length);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out px-10"
        style={{ transform: `translateX(-${current * 34}%)` }}
      >
        {repeatedImages.map((item, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 px-3 relative"
          >
            {/* Square Image */}
            <div className="w-full aspect-square relative">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>

              {/* Text + Button */}
              <div className="absolute bottom-6 left-6">
                <h2 className="text-white text-lg font-semibold">
                  {item.title}
                </h2>
                <button className="mt-2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-600 hover:bg-red-200 transition">
                  →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current % images.length ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
