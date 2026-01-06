import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const EventSingleDefault = () => {
  return (
    <div className="min-h-screen bg-black mt-16 text-white py-10 px-6 md:px-20 lg:px-32">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Aurora Photography Workshop
          </h1>

          {/* Schedule */}
          <ul className="list-decimal list-inside text-lg space-y-2 text-gray-300 mb-8">
            <li>
              <span className="font-semibold text-white">Pre–Workshop Briefing (5:00 AM):</span>{" "}
              Gear setup and safety check.
            </li>
            <li>
              <span className="font-semibold text-white">Field Session (5:30 AM):</span>{" "}
              Shoot at Grotta Lighthouse with real–time coaching.
            </li>
            <li>
              <span className="font-semibold text-white">Editing Lab (6:30 AM):</span>{" "}
              Transfer images to Harpa’s Mac Studio for post–processing.
            </li>
          </ul>

          {/* Featured Experts */}
          <h2 className="text-xl font-semibold mb-2">Featured Experts</h2>
          <ul className="list-disc list-inside mb-8 text-gray-300">
            <li>
              <span className="text-white">Elin Jónsdóttir</span> (National Geographic Photographer)
            </li>
            <li>
              <span className="text-white">Hrafn Sigurðsson</span> (Astrophotography Specialist)
            </li>
          </ul>

          {/* Logistics */}
          <h2 className="text-xl font-semibold mb-2">Logistics</h2>
          <ul className="list-disc list-inside mb-10 text-gray-300 space-y-1">
            <li>
              <span className="text-white">Provided Gear:</span> Tripods, hand warmers.
            </li>
            <li>
              <span className="text-white">What to Bring:</span> DSLR/mirrorless camera, SD card.
            </li>
            <li>
              <span className="text-white">Weather Policy:</span> Rescheduled if visibility &lt; 30%.
            </li>
          </ul>

          {/* Bottom Meta */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 text-lg">
            <div>
              <h3 className="font-semibold mb-2">DETAILS</h3>
              <p>
                <span className="font-semibold">Start:</span> July 17, 2025
              </p>
              <p>
                <span className="font-semibold">End:</span> July 31, 2026
              </p>
              <p>
                <span className="font-semibold">Event Category:</span> Photography
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ORGANIZER</h3>
              <p>Softivus</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">VENUE</h3>
              <p>Harpa Concert Hall, Reykjavik, Iceland</p>
              <p className="text-blue-400 cursor-pointer hover:underline">
                Reykjavik, Iceland + Google Map
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg">
          {/* Free Tag */}
          <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
            Free
          </span>

          {/* Event Image */}
          <img
            src="/Event-image-2.png"
            alt="Aurora Workshop"
            className="w-full h-80 object-cover rounded-lg my-4"
          />

          {/* Event Details */}
          <div className="mt-4 space-y-3 text-xl mt-10 text-gray-300">
            <p>
              <FaCalendarAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Start Date:</span> July 17, 2025
            </p>
            <p>
              <FaCalendarAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">End Date:</span> July 31, 2026
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Venue:</span> Harpa Concert Hall, Reykjavik, Iceland
            </p>
            <p>
              <FaHeart className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Address:</span> Harpa Concert Hall, Reykjavik, Iceland
            </p>
            <p>
              <FaUser className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Organizer:</span> Softivus
            </p>
            <p>
              <span className="font-semibold">Categories:</span> Photography
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-orange-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.242536476207!2d-21.933617!3d64.150833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60a2f1c1f7d3f%3A0x28f635a6f80bb4f0!2sHarpa%20Concert%20Hall%20and%20Conference%20Centre!5e0!3m2!1sen!2sus!4v1678892712345"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSingleDefault;
