import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventList = () => {
  const [activeDay, setActiveDay] = useState("All Days");

  const events = [
    {
      id: 1,
      day: "Thursday",
      date: "June 4, 2025",
      time: "12:00 am",
      category: "AI & Future",
      location: "TeamLab Planets, Tokyo, Japan",
      title: "AI & Future of Creativity Summit",
      desc: "Capture the Northern Lights with award-winning photographers in Iceland’s prime aurora-viewing location. Includes editing masterclass using Lightroom.",
      image: "/Event-Image-1.png",
    },
    {
      id: 2,
      day: "Thursday",
      date: "June 4, 2025",
      time: "12:00 am",
      category: "Fashion Meets",
      location: "The Creative Hub, London, UK",
      title: "Stellar Sound Festival – Where Creativity Meets Innovation",
      desc: "The Stellar Sound Festival unites musicians, designers, and architects to explore how sound shapes art, fashion, and urban spaces. Experience live performances, avant-garde installations, and talks on sonic innovation.",
      image: "/Event-image-2.png",
    },
    {
      id: 3,
      day: "Thursday",
      date: "June 4, 2025",
      time: "12:00 am",
      category: "Fashion Meets",
      location: "Le Silencio Jazz Club, Paris, France",
      title: "Cosmic Jazz & Wine Night",
      desc: "Immerse yourself in an evening of live jazz under a starry, projection-mapped ceiling, accompanied by organic French wines from Bordeaux...",
      image: "/Event-image-3.png",
    },
    {
      id: 4,
      day: "Thursday",
      date: "June 4, 2025",
      time: "12:00 am",
      category: "Galactic Arts",
      location: "Lavazza Flagship Store",
      title: "Galactic Arts & Music Fest – A Lavazza Experience",
      desc: "Celebrate Italian coffee culture with Lavazza through live latte art demos, jazz music, and a pop-up gallery featuring coffee-inspired artworks.",
      image: "/Event-Image-1.png",
    },
  ];

  const days = ["All Days", "Thursday", "Friday", "Saturday", "Sunday"];

  const filteredEvents =
    activeDay === "All Days"
      ? events
      : events.filter((e) => e.day === activeDay);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#111322] py-10 text-center relative">
        <h1 className="text-4xl mt-20 font-bold">Events List</h1>
        <p className="mt-2">
          <a
            href="/"
            className="hover:text-red-600 mb-20 transition cursor-pointer"
          >
             BeyondInfinities
          </a>{" "}
          <span className="text-red-600">&gt; Events List</span>
        </p>
      </div>

      {/* Day Filter Buttons */}
      <div className="flex justify-center mb-10 mt-10 gap-4 py-6 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeDay === day
                ? "bg-purple-600 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto px-4 space-y-6 pb-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="bg-[#111111] rounded-md flex flex-col md:flex-row items-stretch p-6 gap-6"
            >
              {/* Left: Date */}
              <div className="flex flex-col items-center mb-10 justify-center w-20">
                <p className="text-4xl font-bold leading-none">
                  {ev.date.split(" ")[1]}
                </p>
                <p className="text-lg text-white-400 mt-1">
                  {ev.date.split(" ")[0]} {ev.date.split(" ")[2]}
                </p>
              </div>

              {/* Middle: Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{ev.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-lg text-white-300 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-white" /> {ev.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-white" /> {ev.time}
                  </span>
                  <span className="font-medium">{ev.category}</span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-white" /> {ev.location}
                  </span>
                </div>
                <p className="text-white-400 text-lg">{ev.desc}</p>
              </div>

              {/* Right: Image + Button */}
              <div className="flex flex-col items-center justify-between gap-3">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-56 h-28 object-cover rounded-md"
                />
                <button className="border border-gray-400 px-5 py-2 rounded hover:bg-white hover:text-black transition">
                  Register
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white-400 text-center">
            No events available for {activeDay}.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventList;
