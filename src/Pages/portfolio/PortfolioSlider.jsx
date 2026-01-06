import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import ps1 from "/portfolio/ps1.png";
import ps4 from "/portfolio/ps4.png";
import ps7 from "/portfolio/ps7.png";
import "swiper/css";
import "swiper/css/pagination";
import MarqueeComponent from "./MarqueeComponent";

const PortfolioSlider = () => {
  const swiperRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Portfolio slider items data
  const sliderItems = [
    {
      id: 1,
      title: "Light & Shadow Festival",
      image: ps1,
      link: "#",
    },
    {
      id: 2,
      title: "Light & Shadow Festival",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Image-2-1.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Light & Shadow Festival",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Image-5.webp",
      link: "#",
    },
    {
      id: 4,
      title: "Light & Shadow Festival",
      image: ps4,
      link: "#",
    },
    {
      id: 5,
      title: "Light & Shadow Festival",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Image-3.webp",
      link: "#",
    },
    {
      id: 6,
      title: "Light & Shadow Festival",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Image-4.webp",
      link: "#",
    },
    {
      id: 7,
      title: "Light & Shadow Festival",
      image: ps7,
      link: "#",
    },
  ];

  useEffect(() => {
    // Initialize Swiper when component mounts
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 5000,
          reverseDirection: false,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          575: { slidesPerView: 1.8 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1199: { slidesPerView: 3 },
          1399: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
        on: {
          slideChangeTransitionStart: function () {
            // Add animation class to active slide
            const activeSlide = this.slides[this.activeIndex];
            if (activeSlide) {
              activeSlide.classList.add('swiper-slide-animate');
              setTimeout(() => {
                activeSlide.classList.remove('swiper-slide-animate');
              }, 1000);
            }
          },
        },
      });

      // Clean up Swiper instance when component unmounts
      return () => {
        if (swiper) {
          swiper.destroy(true, true);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Add animation classes after component mounts
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in, .slide-up');
      elements.forEach(el => {
        el.classList.add('animate');
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div
            className="relative w-full h-64 md:h-80 lg:h-96 flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/portfolio/pfobg.png')" }}
          >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-blue/60"></div> */}

            <div className="relative z-10">
              {/* Title */}
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-4">
                Portfolio Slider
              </h1>

              {/* Breadcrumb */}
              <div className="text-sm">
                <span className="text-white hover:text-gray-200 cursor-pointer">
                   BeyondInfinities
                </span>
                <span className="mx-2 text-white">›</span>
                <span className="text-white font-medium">
                  Portfolio Slider
                </span>
                <div className="text-white text-sm fade-in" >
                  <span className="breadcrumb-link hover:text-white cursor-pointer highlight-cursor-head">Spacly</span>
                  <span className="mx-2">›</span>
                  <span className="text-red-500 font-medium">Portfolio Slider</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div
              ref={swiperRef}
              className="swiper tp-elements-unique-shape banner-style1"
            >
              <div className="swiper-wrapper">
                {sliderItems.map((item, index) => (
                  <div key={item.id} className="swiper-slide">
                    <div 
                      className="front tp-banner-slide-item relative overflow-hidden rounded-lg group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-20"></div>

                      {/* Content */}
                      <div className="tp-banner-slide-content absolute bottom-0 left-0 right-0 p-6 text-white z-30 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <a href={item.link} className="highlight-cursor-head">
                          <h4 className="tp-banner-title text-xl font-bold mb-2">
                            {item.title}
                          </h4>
                        </a>
                        <a
                          href={item.link}
                          className="inline-flex items-center text-white hover:text-gray-200 transition-colors highlight-cursor-head"
                        >
                          <span className="tp-banner-icon text-lg font-semibold">
                            View Project
                            <i
                              aria-hidden="true"
                              className="ml-2 fas fa-arrow-right-long group-hover:translate-x-2 transition-transform duration-300"
                            ></i>
                          </span>
                        </a>
                      </div>

                      {/* Image */}
                      <img
                        decoding="async"
                        src={item.image}
                        alt={item.title}
                        className="rs-grid-img w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      />

                      {/* Index Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white text-sm font-bold px-3 py-1 rounded-full z-30 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {index + 1}/{sliderItems.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="swiper-pagination mt-6 flex justify-center space-x-2"></div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
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
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
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
          
          .animate-shimmer {
            animation: shimmer 3s infinite linear;
          }
          
          .swiper-slide-animate {
            animation: slideIn 0.8s ease-out forwards;
          }

          .tp-elements-unique-shape {
            position: relative;
          }

          .highlight-cursor-head {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }

          .highlight-cursor-head::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #4f46e5, #ec4899);
            transition: width 0.3s ease;
          }

          .highlight-cursor-head:hover::after {
            width: 100%;
          }

          .swiper-slide {
            height: auto;
            opacity: 0.7;
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          .swiper-slide-active {
            opacity: 1;
            transform: scale(1.05);
            z-index: 2;
          }

          .tp-banner-slide-item {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.5s ease;
          }

          .tp-banner-slide-item:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #d1d5db;
            opacity: 0.7;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: linear-gradient(45deg, #4f46e5, #ec4899);
            opacity: 1;
            transform: scale(1.3);
            box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
          }

          .rs-grid-img {
            filter: grayscale(0.3);
            transition: filter 0.7s ease;
          }

          .group:hover .rs-grid-img {
            filter: grayscale(0);
          }
        `}</style>
      </div>
      <MarqueeComponent />
    </>
  );
};

export default PortfolioSlider;