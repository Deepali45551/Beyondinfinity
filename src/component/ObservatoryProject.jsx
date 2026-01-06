import React from 'react';

const ObservatoryProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-widest text-blue-300">
              ABOUT THE PROJECT
            </h2>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Discover the Story Behind the Stars
            </h1>
            
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold text-lg mb-12 hover:bg-white hover:text-purple-900 transition duration-300">
              Learn More
            </button>
            
            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              The Observatory is a unique digital art-per-up designed to provide a sanctuary of calm and reflection during winter's toughest month. This year's theme, Being Human, invites visitors to experience art and technology in new ways, promoting mental wellness and emotional connection.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded border-2 border-white mr-3"></div>
                <span className="text-lg">Free entry: Donations encouraged for Campaign Against Living Miserably (CALM).</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 rounded border-2 border-white mr-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg">Location: In the heart of London's Eastern City district</span>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-gradient-to-b from-blue-700 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
              {/* Stars */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 4 + 1 + 'px',
                      height: Math.random() * 4 + 1 + 'px',
                      top: Math.random() * 100 + '%',
                      left: Math.random() * 100 + '%',
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Observatory structure */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gray-800 rounded-t-3xl">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full border-4 border-blue-400">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-900 opacity-70"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-700 opacity-90"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white"></div>
                </div>
              </div>
              
              {/* Light beams */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObservatoryProject;