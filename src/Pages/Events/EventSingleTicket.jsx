import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaTags,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const EventSingleTicket = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6 mt-20 md:px-20 lg:px-32">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Galactic Arts & Music Fest – A Lavazza Experience
          </h1>
          <p className="mb-4 text-gray-300">
            Celebrate Italian coffee culture with{" "}
            <span className="font-bold">Lavazza</span> through live latte art
            demos, jazz music, and a pop–up gallery featuring coffee–inspired
            artworks.
          </p>

          <h2 className="text-xl font-semibold mb-4">Why Attend?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Learn how top brands leverage social media for growth.</li>
            <li>
              Discover the future of digital fashion (NFTs, virtual influencers).
            </li>
            <li>Network with industry leaders and digital creators.</li>
            <li>Participate in live case study discussions.</li>
          </ul>

          <div className="mt-8">
            <img
              src="/Ticket.png"
              alt="Event"
              className="rounded-lg shadow-lg w-full h-100"
            />
          </div>
        </div>

        {/* Right Section (Card) */}
        <div className="bg-neutral-900 p-5 rounded-lg h-full shadow-lg">
          {/* Event Image */}
          <div className="relative">
            <img
              src="/Event-Image-1.png"
              alt="Event highlight"
              className="rounded-lg h-100"
            />
            <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
              $16
            </span>
          </div>

          {/* Event Details */}
          <div className="mt-4 space-y-3 text-xl mt-10 text-gray-300">
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-white" />
              <span>
                <span className="font-semibold">Start Date:</span> June 22, 2025
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-white" />
              <span>
                <span className="font-bold">End Date:</span> March 19, 2027
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              <span>
                <span className="font-bold">Venue:</span> Lavazza Flagship Store
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaUser className="text-white" />
              <span>
                <span className="font-bold">Organizer:</span> Softivus
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaTags className="text-white" />
              <span>
                <span className="font-bold">Categories:</span> Galactic Arts
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-full hover:bg-red-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-full hover:bg-red-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-full hover:bg-red-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-full hover:bg-red-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* 📌 Event Schedule Section */}
      <div className="mt-16 text-xl">
        <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
        <ol className="space-y-6 text-gray-300">
          <li>
            <span className="font-bold text-white">
              1. Registration & Welcome Coffee (11:00 AM – 11:15 AM)
            </span>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Check–in and receive an exclusive digital fashion lookbook.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">
              2. Opening Keynote: “The Future of Fashion in the Digital Age” (11:15 AM – 11:35 AM)
            </span>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                <span className="font-semibold">Karim Al-Fayed</span> discusses emerging trends in digital fashion.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">
              3. Panel Discussion: “Threads Talks 3.0” (11:35 AM – 12:00 PM)
            </span>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                Experts debate:{" "}
                <span className="italic">
                  “Can AI Replace Human Creativity in Fashion?”
                </span>
              </li>
              <li>Audience Q&A included.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">
              4. Interactive Workshop: “Building a Viral Fashion Brand” (12:00 PM – 12:20 PM)
            </span>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                Hands–on session with <span className="font-semibold">Sarah Lin</span> on social media strategies.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">
              5. Networking & Closing (12:20 PM – 12:30 PM)
            </span>
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                <span className="font-semibold">Exchange contacts</span> with panelists and attendees.
              </li>
            </ul>
          </li>
        </ol>

        {/* Additional Details */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-white mb-4">Additional Details</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <span className="font-bold">Dress Code:</span> Smart casual
              (Instagram–ready outfits encouraged).
            </li>
            <li>
              <span className="font-bold">Tech Requirements:</span> Bring a
              smartphone/tablet for the workshop.
            </li>
            <li>
              <span className="font-bold">After–Event Access:</span> Digital
              toolkit sent to all attendees.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventSingleTicket;
