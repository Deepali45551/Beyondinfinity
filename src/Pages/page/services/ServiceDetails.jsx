import React, { useState } from 'react';
import MarqueeComponent from '../../portfolio/MarqueeComponent';
const InputField = ({ label, type = "text", textarea = false }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      {/* Label disappears when typing */}
      {!value && (
        <label className="absolute left-4 top-3 text-white text-sm pointer-events-none">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          rows="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      )}
    </div>
  );
};
const ServiceDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const coreFeatures = [
    "Custom-Built Satellite Platforms",
    "Advanced Payload Integration",
    "Launch Coordination & Support",
    "Ground Control Systems",
    "In-Orbit Monitoring & Maintenance",
    "End-to-End Mission Support"
  ];

  const faqItems = [
    {
      id: 1,
      question: "What types of satellites do you design and build?",
      answer: "We design and build a wide range of satellites including CubeSats, nano-satellites, micro-satellites, and full-scale communication, observation, and scientific satellites tailored to specific mission requirements."
    },
    {
      id: 2,
      question: "Do you handle satellite launches as well?",
      answer: "Yes, we provide comprehensive launch coordination services including launch vehicle selection, integration, regulatory compliance, and mission management to ensure successful deployment."
    },
    {
      id: 3,
      question: "Can you customize a satellite for a specific mission?",
      answer: "Absolutely. We specialize in custom satellite solutions tailored to specific mission objectives, whether it's Earth observation, communication, scientific research, or technology demonstration."
    },
    {
      id: 4,
      question: "Do you provide post-launch monitoring and support?",
      answer: "Yes, we offer complete in-orbit support including performance monitoring, anomaly resolution, and lifetime extension services to ensure mission success throughout the satellite's operational life."
    }
  ];

  const relatedServices = [
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
   
      
        <div className="container mx-auto px-4 relative mt-20 z-10">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Satellite Systems
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="hover:text-white cursor-pointer">Service</span>
              <span className="mx-2">›</span>
              <span className="text-white">Satellite Systems</span>
            </div>
          </div>
        </div>
   </div>   

      {/* Main Content */}
      <div className="container bg-black mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Content */}
          <div className="w-full lg:w-3/5">
            {/* Overview Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src="/servcenew.webp" 
                  alt="Satellite Systems" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <div className="text-white space-y-4">
                <p>
                  Our Satellite Systems service offers comprehensive solutions for the design, development, and operation of satellites tailored to a wide range of missions. From compact CubeSats to full-scale communication and observation satellites, we specialize in delivering high-performance systems that meet the demands of modern space applications.
                </p>
                <p>
                  Our team handles every stage of the satellite lifecycle, including payload integration, structural design, testing, launch coordination, and in-orbit support. Whether you're aiming to explore space, gather environmental data, or improve global connectivity, we provide reliable and scalable systems backed by cutting-edge technology.
                </p>
                <p>
                  With a strong focus on innovation and quality, our satellite solutions are built to perform in the most demanding conditions of space.
                </p>
              </div>
            </div>

            {/* What We Offer Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
              <div className="bg-black rounded-xl shadow-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white mt-1 mr-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Custom Satellite Design – From CubeSats to large-scale platforms, engineered to meet diverse needs.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900  rounded-full flex items-center justify-center text-white mt-1 mr-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Payload Integration – Expert handling of scientific instruments, sensors, and communication modules.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900  rounded-full flex items-center justify-center text-white mt-1 mr-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Launch Readiness Support – Pre-launch testing, validation, and logistics for successful deployment.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900  rounded-full flex items-center justify-center text-white mt-1 mr-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Ground Control Systems – Reliable communication infrastructure for satellite operation and data retrieval.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white mt-1 mr-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">In-Orbit Support – Performance monitoring, troubleshooting, and lifecycle management.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
              <p className="text-white leading-relaxed">
                We combine advanced engineering, industry expertise, and a passion for innovation to deliver satellite systems that exceed expectations. Our team ensures mission success through meticulous design, rigorous testing, and end-to-end support. With a proven track record in both government and commercial sectors, we're the trusted partner for reliable, scalable, and future-ready space solutions.
              </p>
            </div>

            {/* Core Features Section */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-white mb-4">Core Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coreFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-black rounded-lg p-4 shadow-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-white mb-6">This is the heading</h4>
              <div className="bg-black rounded-xl shadow-lg overflow-hidden">
                {faqItems.map((item, index) => (
                  <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-white">{item.question}</h5>
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
                      className={`px-6 pb-4 pt-0 overflow-hidden transition-all duration-300 ease-in-out ${
                        activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-white">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
         <div className="w-full lg:w-1/3">
      <div className="bg-black rounded-xl shadow-lg p-6 sticky border-1 border-gray-600 top-6">
        <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>

        {/* Form */}
        <form className="space-y-4">
          <InputField label="Name" />
          <InputField label="Email" type="email" />
          <InputField label="Message" textarea />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Get in Touch
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h4 className="text-lg text-center font-semibold text-white mb-4">
            If You Need Any Help Contact<br/> With Us!
          </h4>
          <div className="flex items-center justify-center text-white">
            <svg
              className="w-5 h-5 text-white mr-3 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>(041) 1234 456</span>
          </div>
        </div>
      </div>
    </div>
    </div>

        {/* Related Services Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <span className="text-white font-semibold tracking-wider">/Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              More Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((service) => (
              <div key={service.id} className="bg-black rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                <div className="mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
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
        </div>
      </div>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default ServiceDetails;