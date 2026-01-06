import React from "react";
import MarqueeComponent from "./MarqueeComponent";

const PortfolioRandom = () => {
  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      number: "1",
      title: "Stratos-X",
      subtitle: "Next-Gen High-Altitude Surveillance Drone",
      description: "Designed for long-endurance missions at the edge of the stratosphere,",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Product-Image.webp",
      link: "#",
      aosDelay: 100,
    },
    {
      id: 2,
      number: "2",
      title: "Orionis Launch System",
      subtitle: "Reusable Orbital Launch Platform",
      description: "A cost-effective, partially reusable rocket system developed.",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Product-Image-1.webp",
      link: "#",
      aosDelay: 150,
    },
    {
      id: 3,
      number: "3",
      title: "VortexOne",
      subtitle: "Advanced Jet Propulsion Engine",
      description: "An ultra-efficient turbofan engine engineered for modern commercial",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Product-Image-2.webp",
      link: "#",
      aosDelay: 200,
    },
    {
      id: 4,
      number: "4",
      title: "AetherWing",
      subtitle: "Autonomous Electric Air Taxi",
      description: "A fully electric VTOL aircraft designed for sustainable urban air mobility",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Product-Image-3.webp",
      link: "#",
      aosDelay: 250,
    },
  ];

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
              Portfolio Random
            </h1>

            {/* Breadcrumb */}
            <div className="text-sm">
              <span className="text-white hover:text-gray-200 cursor-pointer">
                 BeyondInfinities
              </span>
              <span className="mx-2 text-white">›</span>
              <span className="text-white font-medium">Portfolio Random</span>
            </div>
          </div>
        </div>
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <span 
              className="text-sm uppercase tracking-wider text-white block mb-4" 
              data-aos="fade-up" 
              data-aos-delay="150" 
              data-aos-duration="700"
            >
              /Our Work
            </span>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4" 
              data-aos="fade-up" 
              data-aos-delay="100" 
              data-aos-duration="1000"
            >
              Featured Work
            </h2>
          </div>
          
          {/* View All Button */}
          <div className="sticky top-4 z-10">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors duration-300 shadow-md hover:shadow-lg"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <span className="btn_text">View all</span>
            </a>
          </div>
        </div>

        {/* 3D Wireframe Image (Hidden on mobile/tablet) */}
        <div className="hidden md:block absolute right-0 top-1/4 w-1/4 z-0 opacity-20">
          <img 
            decoding="async" 
            src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/3d-rendering-wireframe-f16fighting-falcon-1.webp" 
            alt="3D Wireframe" 
            className="w-full h-auto veritcal"
          />
        </div>

        {/* Portfolio Grid */}
        <div className="relative z-10">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between mb-24 gap-8`}
              data-aos="fade-up" 
              data-aos-delay={item.aosDelay}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="reveal-item overflow-hidden rounded-lg shadow-xl">
                  <div className=""></div>
                  <img 
                    decoding="async" 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-white">{item.number}. {item.title}</p>
                </div>
                
                <div className="mb-6">
                  <h5 
                    className="text-2xl font-bold text-white mb-4" 
                    data-aos="fade-up" 
                    data-aos-delay="100" 
                    data-aos-duration="1000"
                  >
                    {item.subtitle}
                  </h5>
                  
                  <div 
                    className="text-white mb-6" 
                    data-aos="fade-up" 
                    data-aos-delay="200" 
                    data-aos-duration="1200"
                  >
                    <p>{item.description}</p>
                  </div>
                  
                  <div 
                    className="mt-6" 
                    data-aos="fade-up" 
                    data-aos-delay="250" 
                    data-aos-duration="1500"
                  >
                    <a 
                      href={item.link} 
                      className="inline-flex items-center px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-white  transition-colors duration-300"
                    >
                      learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Custom Styles */}
        <style jsx>{`
          .reveal-item {
            position: relative;
            overflow: hidden;
          }

          .reveal-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transform: translateX(-100%);
            transition: transform 0.6s ease-out;
            z-index: 5;
          }

          .reveal-item:hover .reveal-animation {
            transform: translateX(0);
          }

          @media (max-width: 768px) {
            .veritcal {
              display: none;
            }
          }
        `}</style>
      </div>
      <MarqueeComponent />
    </>
  );
};

export default PortfolioRandom;
