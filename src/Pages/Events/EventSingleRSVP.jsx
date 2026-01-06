import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const EventSingleRSVP = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-16 py-10 px-6 md:px-20 lg:px-32">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Stargazing Night: Saturn’s Rings
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Embark on an extraordinary celestial journey as the Dubai Design District and
            the Arab Fashion Council present the inaugural Dubai Fashion Week under the stars.
            This unique stargazing experience combines the wonder of astronomical observation
            with the elegance of high fashion, creating an unforgettable night where cosmic
            beauty meets earthly creativity.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            As Saturn reaches its optimal viewing position, participants will witness the
            magnificent rings of the sixth planet through professional–grade telescopes operated
            by certified astronomers. The event begins in the early morning hours when atmospheric
            conditions provide the clearest visibility of Saturn’s iconic ring system, composed of
            countless ice particles and rocky debris that create one of the most spectacular sights
            in our solar system.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            The Dubai Design District has transformed this astronomical phenomenon into a
            fashion-forward experience, where guests can observe Saturn’s rings while surrounded by
            stunning installations inspired by celestial themes. Local and international fashion
            designers will showcase collections that draw inspiration from the cosmos, featuring
            flowing fabrics that mirror Saturn’s ethereal rings and metallic accents that reflect
            starlight.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Professional astronomers will guide participants through the observation experience,
            sharing fascinating insights about Saturn’s composition, its 83 known moons, and the
            Cassini mission’s groundbreaking discoveries. High–powered telescopes will reveal details
            of the Rings A, B, and C, along with the mysterious spokes that appear and disappear
            across the ring system.
          </p>

          {/* Bottom Image */}
          <img
            src="/Ship.png"
            alt="Stargazing Saturn"
            className="w-full rounded-xl shadow-lg mt-6"
          />
        </div>

        {/* Right Sidebar */}
        <div className="bg-neutral-900 p-5 rounded-lg h-screen shadow-lg">
          {/* Free Tag */}
          <span className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
            Free
          </span>

          {/* Event Image */}
          <img
            src="/RSVP.png"
            alt="Event Banner"
            className="w-full h-80 object-cover rounded-lg my-4"
          />

          {/* Event Details */}
          <div className="mt-4 space-y-3 text-xl mt-10 text-gray-300">
            <p>
              <FaCalendarAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Start Date:</span> August 7, 2025
            </p>
            <p>
              <FaCalendarAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">End Date:</span> April 30, 2026
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Venue:</span> SpaceAir Park
            </p>
            <p>
              <FaUser className="inline mr-2 text-orange-400" />
              <span className="font-semibold">Organizer:</span> Softivus
            </p>
            <p>
              <span className="font-semibold">Categories:</span> Stargazing Night
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-orange-400">
              <FaFacebook size={40} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram size={40} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter size={40} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSingleRSVP;
