import React, { useState } from 'react';
import MarqueeComponent from '../portfolio/MarqueeComponent';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const pricingPlans = [
    {
      id: 'basic',
      title: 'Basic Pass',
      price: '$49',
      period: 'Per Month',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      features: [
        { text: 'Live session access only', included: true },
        { text: 'Community chat feature', included: true },
        { text: 'Event recording available for 24 hours', included: false }
      ],
      buttonText: 'Buy Now',
      popular: false
    },
    {
      id: 'standard',
      title: 'Standard Pass',
      price: '$99',
      period: 'Per Month',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      features: [
        { text: 'Live and recorded session access', included: true },
        { text: 'Basic networking tools', included: true },
        { text: 'Q&A chat', included: false }
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      id: 'premium',
      title: 'Premium Pass',
      price: '$149',
      period: 'Per Month',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      features: [
        { text: 'Full access to live & on-demand', included: true },
        { text: '1 Networking opportunities', included: true },
        { text: 'Session downloads', included: false }
      ],
      buttonText: 'Join VIP',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jonathan Keenes",
      role: "CEO and Founder @ BeFlow Studio",
      image: "/prcng.webp",
      quote: "Visiting the Astronomy Museum was a transformative experience for my family. The interactive exhibits kept our kids engaged for hours, and the planetarium show. I found the real-time telescope feed mesmerizing. This place doesn't just teach",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Space Enthusiast",
      image: "/prcng.webp",
      quote: "The pricing plans offer incredible value for the quality of content and access provided. The Standard Pass has been perfect for my needs as an amateur astronomer.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Research Scientist",
      image: "/prcng.webp",
      quote: "As a professional in the field, I appreciate the depth of content available. The Premium Pass provides access to resources that are invaluable for my research.",
      rating: 5
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
              Pricing
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white">Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="container bg-black mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Select the perfect plan for your space exploration journey. All plans include access to our exclusive content and community features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-black rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-red-500 transform scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span> */}
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                  <div className="text-white">
                    {plan.icon}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? "text-white" : "text-white line-through"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-black text-white hover:bg-red-500'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Members Say
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Hear from space enthusiasts and professionals who have experienced our services firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-black rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-white italic">"{testimonial.quote}"</p>
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

export default Pricing;