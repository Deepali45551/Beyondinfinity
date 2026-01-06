import React, { useState } from 'react';
import FeaturedMissions from './FeaturedMissions';

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const events = [
    {
      id: 1,
      day: 1,
      title: "The winter solstice watch",
      time: "9:00 am - 10:30 am",
      location: "New York, USA",
      description: "As the winter solstice approaches, many celebrate the longest night of the year. This time marks a shift in seasons, inviting reflection and warmth amidst the cold.",
      image: "/Speaker-Image-3.webp"
    },
    {
      id: 2,
      day: 1,
      title: "Watching Geminid meteors",
      time: "9:00 am - 10:30 am",
      location: "New York, USA",
      description: "As the Geminid meteor shower lights up the night sky, strangers gather to witness this celestial spectacle. With each shooting star, wishes are made, and the universe feels a little closer.",
      image: "/Speaker-Image-2.webp"
    }
  ];

  const filteredEvents = events.filter(event => event.day === activeDay);

  return (
    <div className="min-h-screen bg-black py-8 px-4 font-sans">

        
         <section className="relative bg-black text-white py-20 px-6 lg:px-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Discover the Future of Space Exploration
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join us in unraveling the mysteries of the universe with cutting-edge technology and research.
        </p>
        <a
          href="#explore"
          className="inline-block bg-white text-red-800  font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Explore Now
        </a>
      </div>
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
    </section>.  

    
      <div className="max-w-4xl mx-auto  bg-[#191919]  rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="p-6  bg-black  ">
          <h1 className="text-3xl font-bold text-red-800 mb-2">Event Schedule</h1>
        </div>

        {/* Day Selector */}
       <div className="flex items-center justify-between bg-[#191919] p-4 rounded-lg shadow-lg">
      {/* Left side */}
      <div className="text-white font-bold text-xl">
        Conference Program
      </div>

      {/* Right side */}
<div className="flex space-x-6">
  {/* First Day */}
  <div
    onClick={() => setActiveDay(1)}
    className={`cursor-pointer px-3 py-1.5 rounded-md text-center transition-all duration-300 ${
      activeDay === 1
        ? "text-red-800 font-semibold shadow-lg"
        : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    <div className="text-sm">First Day</div>
    <div className="text-xs">Oct 7, 2025</div>
  </div>

  {/* Second Day */}
  <div
    onClick={() => setActiveDay(2)}
    className={`cursor-pointer px-3 py-1.5 rounded-md text-center transition-all duration-300 ${
      activeDay === 2
        ? "text-red-800 font-semibold shadow-lg"
        : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    <div className="text-sm">Second Day</div>
    <div className="text-xs">Oct 8, 2025</div>
  </div>

  {/* Third Day */}
  <div
    onClick={() => setActiveDay(3)}
    className={`cursor-pointer px-3 py-1.5 rounded-md text-center transition-all duration-300 ${
      activeDay === 3
        ? "text-red-800 font-semibold shadow-lg"
        : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    <div className="text-sm">Third Day</div>
    <div className="text-xs">Oct 9, 2025</div>
  </div>
</div>
    </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Introductory Text (only for day 1) */}
          {activeDay === 1 && (
            <div className="mb-6 text-white">
              {/* <p className="leading-relaxed">
                Stargazing is a captivating hobby for beginners. Start by finding a dark spot away from city lights. 
                Use a star chart or an app to identify constellations and planets. Enjoy the beauty of the night sky!
              </p> */}
              <div className=" my-6"></div>
            </div>
          )}

          {/* Events Section with Scroll */}
<div className="h-96 overflow-y-auto pr-2 custom-scrollbar">
  {filteredEvents.map(event => (
    <div 
      key={event.id} 
      className="mb-6  overflow-hidden hover:shadow-md transition-shadow duration-300 last:mb-0"
    >
      <div className="flex flex-col md:flex-row">
        {/* Event Image */}
        <div className="md:w-2/5 relative group">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <p className="text-white text-sm text-center">{event.description}</p>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="md:w-3/5 p-4">
          <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
          <div className="flex items-start mb-2">
            <div className="w-5 h-5   flex-shrink-0 mt-0.5 mr-2"></div>
            <span className="text-red-600">{event.time}</span>
          </div>
          <div className="flex items-start mb-3">
            <div className="w-5 h-5 rounded border border-gray-400 flex-shrink-0 mt-0.5 mr-2"></div>
            <span className="text-red-600">{event.location}</span>
          </div>
          <p className="text-white text-sm mt-3">{event.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<style jsx>{`
  /* Chrome, Edge, Safari */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #111111; /* Dark track */
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #b91c1c; /* Tailwind red-800 */
    border-radius: 9999px;
    border: 2px solid #111111;
  }

  /* Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #b91c1c #111111;
  }
`}</style>
        </div>
      </div>
      <FeaturedMissions/>
    </div>
  );
};

export default EventSchedule;