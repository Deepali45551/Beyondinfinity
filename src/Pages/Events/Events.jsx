import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Events = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");

  const events = [
    {
      id: 1,
      date: "Sat, 23 Aug 2025",
      title: "Stellar Sound Festival – Where Creativity Meets Innovation",
      location: "The Creative Hub, London, UK",
      desc: "The Stellar Sound Festival unites musicians, designers, and architects to explore how sound shapes art, fashion, and urban spaces. Experience live performances, avant-garde installations, and talks on sonic innovation.",
      image: "/Event-Image-1.png", // replace with your image path
      start: "June 4, 2025 @ 12:00 am",
      end: "May 10, 2027 @ 12:00 am",
    },
    {
      id: 2,
      date: "Sat, 23 Aug 2025",
      title: "Cosmic Jazz & Wine Night",
      location:
        "Le Silencio Jazz Club, Paris, France Le Silencio Jazz Club, Paris, France, Paris, France",
      desc: "Immerse yourself in an evening of live jazz under a starry, projection-mapped ceiling, accompanied by organic French wines from Bordeaux and Burgundy. A collaboration with Vinothèque Paris.",
      image: "/Event-image-2.png", // replace with your image path
      start: "June 4, 2025 @ 12:00 am",
      end: "May 10, 2027 @ 12:00 am",
    },
    {
      id: 3,
      date: "Sat, 23 Aug 2025",
      title: "AI & Future of Creativity Summit",
      location: "AI & Future of Creativity Summit",
      desc: "Capture the Northern Lights with award-winning photographers in Iceland’s prime aurora-viewing location. Includes editing masterclass using Lightroom.",
      image: "/Event-image-3.png", // replace with your image path
      start: "June 4, 2025 @ 12:00 am",
      end: "May 10, 2027 @ 12:00 am",
    },
    {
      id: 4,
      date: "Sat, 23 Aug 2025",
      title: "Galactic Arts & Music Fest – A Lavazza Experience",
      location: "Lavazza Flagship Store",
      desc: "Celebrate Italian coffee culture with Lavazza through live latte art demos, jazz music, and a pop-up gallery featuring coffee-inspired artworks.",
      image: "/Event-Image-1.png", // replace with your image path
      start: "June 4, 2025 @ 12:00 am",
      end: "May 10, 2027 @ 12:00 am",
    },
    {
      id: 5,
      date: "Sat, 23 Aug 2025",
      title: "Aurora Photography Workshop",
      location:
        "Harpa Concert Hall, Reykjavik, Iceland Harpa Concert Hall, Reykjavik, Iceland, Reykjavik, Iceland",
      desc: "Capture the Northern Lights with award-winning photographers in Iceland’s prime aurora-viewing location. Includes editing masterclass using Lightroom.",
      image: "/Event-image-2.png", // replace with your image path
      start: "June 4, 2025 @ 12:00 am",
      end: "May 10, 2027 @ 12:00 am",
    },
  ];

  const filteredEvents = events.filter((ev) =>
    ev.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#111322] py-20 px-6 text-center text-white">
        <h1 className="text-5xl mt-10 font-bold">Events</h1>
        <p className="text-white mt-2">
          <a href="/" className="hover:text-red-600 cursor-pointer transition">
             BeyondInfinities
          </a>{" "}
          <span className="text-red-600">&gt; Events</span>
        </p>
      </div>

      {/* Search + Actions */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center w-full md:w-1/2 border rounded-lg px-3 py-2 bg-white shadow-sm">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for events"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow">
            Find Events
          </button>
          <div className="flex gap-3 text-sm">
            {["list", "month", "day"].map((opt) => (
              <button
                key={opt}
                onClick={() => setView(opt)}
                className={`pb-1 border-b-2 ${
                  view === opt
                    ? "border-black font-semibold"
                    : "border-transparent text-gray-500"
                }`}
              >
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event List */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-gray-600 font-medium mb-6">August 2025</h2>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className=" p-6 mb-6 flex flex-col md:flex-row gap-6"
            >
              {/* Date */}
              <div className="flex-shrink-0 text-center">
                <p className="uppercase text-sm text-gray-500">Sat</p>
                <p className="text-3xl font-bold">{ev.date.split(" ")[1]}</p>
              </div>

              {/* Event Info */}
              <div className="flex-grow">
                <p className="text-sm text-gray-500 mb-1">
                  {ev.start} - {ev.end}
                </p>
                <h3 className="text-4xl hover:underline font-semibold mb-2">
                  {ev.title}
                </h3>
                <p className="font-medium text-gray-700">{ev.location}</p>
                <p className="text-gray-600 mt-2">{ev.desc}</p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-48 h-32">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
