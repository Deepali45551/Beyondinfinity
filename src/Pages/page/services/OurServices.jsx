import React, { useState } from 'react';
import MarqueeComponent from '../../portfolio/MarqueeComponent';

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const services = [
    {
      id: 1,
      title: "Advanced Manufacturing",
      description: "Our state-of-the-art manufacturing facilities produce precision aerospace components",
      icon: "/settng.svg",
      link: "https://softivus.com/wp/ BeyondInfinities/services/advanced-manufacturing/"
    },
    {
      id: 2,
      title: "Aerospace Engineering",
      description: "We specialize in cutting-edge aircraft and spacecraft design, integrating advanced",
      icon: "/servce2.svg",
      link: "https://softivus.com/wp/ BeyondInfinities/services/aerospace-engineering/"
    },
    {
      id: 3,
      title: "Satellite Systems",
      description: "From low-Earth orbit to deep-space missions, we develop high-performance satellite",
      icon: "/servce3.svg",
      link: "https://softivus.com/wp/ BeyondInfinities/services/satellite-systems/"
    }
  ];

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
              Our Services
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white">Our Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container bg-black mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="text-white font-semibold tracking-wider">/Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            Pushing the Boundaries of Aerospace
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-black rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center text-white font-semibold hover:text-red-600 transition-colors"
              >
                View Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <div 
            className="w-full h-96 bg-cover bg-center"
            style={{ backgroundImage: "url(https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Background-Image.webp)" }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group">
                <svg className="w-8 h-8 text-white ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <div className="text-center mb-16">
            <span className="text-white font-semibold tracking-wider">/FAQS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-6xl mx-auto bg-black rounded-xl shadow-lg overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left: FAQ Accordion */}
    <div>
      {faqItems.map((item, index) => (
        <div key={item.id} className="border-b border-gray-200 last:border-b-0">
          <button
            className="w-full px-8 py-6 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <span className="text-white font-bold mr-4">{index + 1}.</span>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              </div>
              <span className="ml-4 flex-shrink-0">
                {activeIndex === index ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </div>
          </button>
          <div
            className={`px-8 pb-6 pt-0 overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-white pl-7">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right: Image */}
    <div className="flex justify-center items-center">
      <img
        decoding="async"
        className="rounded-lg max-w-full h-auto"
        src="/FAQ-Image.webp"
        alt="FAQ Illustration"
      />
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default OurServices;