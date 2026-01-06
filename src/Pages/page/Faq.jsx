import React, { useState } from 'react';
import MarqueeComponent from '../portfolio/MarqueeComponent';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqItems = [
    {
      id: 1,
      question: "Is space tourism safe?",
      answer: "However, exposure to elevated levels of ionising radiation, such as those possible during space weather events, can potentially cause damage to DNA."
    },
    {
      id: 2,
      question: "Do I need to be in perfect health?",
      answer: "No, but you'll need to pass a basic medical screening. We provide clear guidelines to help you prepare physically for the experience."
    },
    {
      id: 3,
      question: "What training is required?",
      answer: "Space tour training typically involves physical conditioning, emergency procedures, and familiarity with spacecraft systems."
    },
    {
      id: 4,
      question: "How long does a space trip last?",
      answer: "Space tourism missions, especially suborbital flights, are significantly shorter than missions to the International Space Station (ISS) or beyond. Suborbital flights, like those offered by Virgin Galactic or Blue Origin, typically last around 10 minutes. Missions to the ISS can last several months, often six months, and some have lasted over a year."
    },
    {
      id: 5,
      question: "Can anyone go to space?",
      answer: "Space travel is quickly becoming more accessible than ever, with Virgin Galactic and Blue Origin among those offering civilians the chance to buy a ticket to space. Whether on a commercial space flight, as a trained astronaut, or after your passing, there are a variety of ways that you can go to space."
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <div className="relative bg-gray-900 py-16 overflow-hidden">
        <img 
          src="/breadcrum_bg.webp" 
          alt="breadcrumb background" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="container mx-auto px-4 relative mt-10 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FAQs
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white font-bold cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white font-bold">FAQs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container bg-black mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-purple-500  font-semibold tracking-wider">/FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>
        
          </div>

       {/* FAQ Accordion */}
{/* FAQ Accordion */}
<div className="bg-black rounded-xl shadow-lg overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Left: FAQ Accordion */}
    <div>
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          className={`bg-black overflow-hidden transition-all
            ${activeIndex === index ? "border border-red-500" : "border border-transparent"}
            ${index === 0 ? "rounded-t-xl" : ""}
            ${index === faqItems.length - 1 ? "rounded-b-xl" : ""}
          `}
        >
          {/* Button */}
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-3">
              <span className="text-white font-bold">{String(index + 1).padStart(2, "0")}.</span>
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            </div>

            <span className="text-white text-2xl font-bold">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Answer */}
          <div
            className={`px-6 pb-5 transition-all duration-300 ease-in-out text-gray-300
              ${activeIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
              overflow-hidden`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>


    {/* Right: Image */}
   <div className="flex justify-center items-center overflow-visible py-10">
      <img
        decoding="async"
        className="rounded-lg w-auto max-w-[90%] animate-float"
        src="/FAQ-Image.webp"
        alt="FAQ Illustration"
      />

      {/* Inline animation styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  </div>
</div>


          {/* Newsletter Section */}
          <div className="bg-black rounded-xl p-8 md:p-12 mt-16 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Stay Updated on the Future of Space
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10">
              Be the first to know about upcoming launches, new destinations, exclusive offers, and behind-the-scenes insights from our space programs.
            </p>
            
            <div className="max-w-md mx-auto relative ">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-4 pr-12 border-1 border-gray-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <button className="absolute right-2 top-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default Faq;