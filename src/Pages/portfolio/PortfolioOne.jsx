import React, { useEffect } from "react";
import pfo1 from "/portfolio/pfo1.png";
import pfo2 from "/portfolio/pfo2.png";
import pfo3 from "/portfolio/pfo3.png";
import pfo4 from "/portfolio/pfo4.png";
import pfo5 from "/portfolio/pfo5.png";
import pfo6 from "/portfolio/pfo6.png";
import MarqueeComponent from "./MarqueeComponent";

const PortfolioOne = () => {
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      image: pfo1,
    },
    {
      id: 2,
      image: pfo2,
    },
    {
      id: 3,
      image: pfo3,
    },
    {
      id: 4,
      image: pfo4,
    },
    {
      id: 5,
      image: pfo5,
    },
    {
      id: 6,
      image: pfo6,
    },
  ];

  useEffect(() => {
    // Add animation classes with delays after component mounts
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-up, .slide-up, .fade-in');
      elements.forEach(el => {
        el.classList.add('animate');
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div
          className="relative w-full h-64 md:h-80 lg:h-96 flex flex-col justify-center items-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/portfolio/pfobg.png')" }} // replace with your image
        >
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/60"></div> */}

          <div className="relative z-10">
            {/* Title */}
            <h1 className="text-2xl md:text-6xl font-bold text-white mb-4">
              Portfolio One
            </h1>

            {/* Breadcrumb */}
            <div className="text-sm">
              <span className="text-white hover:text-gray-200 cursor-pointer">
                 BeyondInfinities
              </span>
              <span className="mx-2 text-white">›</span>
              <span className="text-white font-medium">Portfolio One</span>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-left mb-12">
          <span className="text-sm uppercase tracking-wider text-white block mb-2">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Our Gallery
          </h2>
        </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={`Portfolio item ${item.id}`}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end z-20">
                    <div className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-3 mb-3">
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">Design</span>
                        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Development</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Project Title</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        Brief description of the project goes here.
                      </p>
                      <button className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-md transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        View Project
                      </button>
                    </div>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes marqueeX {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes marqueeY {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .fade-in.animate {
          opacity: 1;
        }
        
        .slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .slide-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-marquee-x {
          animation: marqueeX 15s linear infinite;
        }
        
        .animate-marquee-y {
          animation: marqueeY 20s linear infinite;
        }
      `}</style>
      
      <MarqueeComponent/>
    </>
  );
};

export default PortfolioOne;