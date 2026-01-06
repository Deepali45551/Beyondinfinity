import React, { useState, useEffect } from 'react';
import MarqueeComponent from '../../portfolio/MarqueeComponent';

const TeamDetails = () => {
  const [progress, setProgress] = useState({
    astronomy: 0,
    astrophysics: 0,
    spaceEngineering: 0
  });

  useEffect(() => {
    // Simulate progress bar animation
    const timer = setTimeout(() => {
      setProgress({
        astronomy: 70,
        astrophysics: 80,
        spaceEngineering: 90
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "info@example.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "(888) 456 7890"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "410 Sandtown, California 94001, USA"
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
        <div className="container mx-auto px-4 relative z-10 mt-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Team Details
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white">Ethan Fischer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container bg-black mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src="/team2.webp" 
                alt="Ethan Fischer" 
                className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-black rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-white  mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <p className="text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-3/5">
            {/* Speaker Section */}
            <div className="mb-12">
              <span className="text-white font-semibold tracking-wider">Speaker</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Why Should Attend Our Event
              </h2>
              <p className="text-white leading-relaxed">
                Meet our esteemed speaker, Ethan Fischer, a visionary leader with extensive expertise in space technology and innovation. 
                Renowned for groundbreaking insights and dynamic presentations, Ethan Fischer inspires audiences to achieve excellence 
                and embrace innovation. Don't miss this transformative experience!
              </p>
            </div>

            {/* Personal Experience Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Personal Experience
              </h2>
              <p className="text-white leading-relaxed mb-6">
                With years of firsthand experience, Ethan Fischer has navigated the highs and lows of space exploration and technology. 
                Their journey is a testament to resilience and innovation, transforming challenges into stepping stones. Drawing from 
                personal milestones, Ethan Fischer brings authenticity and relatability, offering invaluable lessons to inspire and 
                empower audiences. Whether sharing pivotal moments or key strategies, their narrative bridges the gap between ambition 
                and achievement, encouraging others to pursue their goals with renewed vigor.
              </p>

              {/* Skills Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Astronomy</span>
                    <span className="text-white font-bold">{progress.astronomy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress.astronomy}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Astrophysics</span>
                    <span className="text-white font-bold">{progress.astrophysics}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress.astrophysics}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">Space Engineering</span>
                    <span className="text-white font-bold">{progress.spaceEngineering}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress.spaceEngineering}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Our Team Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Our Team
              </h3>
              <p className="text-white leading-relaxed">
                Our team stands out for its unmatched expertise, dedication, and passion for excellence. With diverse skills and a 
                commitment to collaboration, we ensure exceptional results for every project. Choosing our team means partnering with 
                professionals who value innovation, integrity, and client success. Let us drive your goals forward with proven expertise 
                and unwavering support.
              </p>
            </div>

            {/* Join Our Team Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Team
              </h3>
              <p className="text-white leading-relaxed">
                Join our dynamic team and be a part of a community dedicated to innovation, collaboration, and growth. We value creativity, 
                passion, and a commitment to excellence. Explore exciting opportunities to make a difference and grow professionally while 
                contributing to impactful projects. Together, we can achieve extraordinary results and push the boundaries of what's possible 
                in space exploration and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default TeamDetails;