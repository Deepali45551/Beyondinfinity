import React, { useState } from 'react';
import MarqueeComponent from './MarqueeComponent';

const PortfolioDetails = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = window.location.href;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb Header */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="breadcrumbs-inner">
            <div className="flex flex-col items-center text-center">
              <h1 className="page-title text-4xl md:text-5xl font-bold mb-4 mt-14">
                HelioWatch Solar Observatory
              </h1>
              <div className="breadcrumbs-title text-sm text-gray-300">
                <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
                <span className="mx-2">›</span>
                <span className="hover:text-white cursor-pointer">Portfolio</span>
                <span className="mx-2">›</span>
                <span className="text-white">HelioWatch Solar Observatory</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Project Information */}
              <div className="bg-black p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Project Information:</h5>
                <p className="text-gray-300">Real-time solar storm early-warning system.</p>
              </div>

              {/* Client */}
              <div className="bg-black p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Client:</h5>
                <p className="text-gray-300">ESA/NOAA</p>
              </div>

              {/* Date */}
              <div className="bg-black p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Date:</h5>
                <p className="text-gray-300">May 14, 2025</p>
              </div>

              {/* Category */}
              <div className="bg-black p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Category:</h5>
                <span className="text-white hover:text-white cursor-pointer">
                  Space Weather
                </span>
              </div>

              {/* Share */}
              <div className="bg-black p-6 rounded-lg">
                <h5 className="text-lg font-semibold mb-3">Share on</h5>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=HelioWatch+Solar+Observatory`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </a>

                  {/* Copy Link */}
                  <button
                    onClick={copyToClipboard}
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Copy Link"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M320 64H280.6c-3.1-14.3-15.8-24-30.6-24h-32V24c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v16H64c-17.7 0-32 14.3-32 32v400c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM184 40h48v48h-48V40zm136 432H64V96h56v24c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24V96h56v376z"/>
                      <path d="M128 200h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                    </svg>
                  </button>
                </div>
                {copied && (
                  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg">
                    Link copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                HelioWatch Solar Observatory
              </h2>
            </div>

            {/* Featured Image */}
            <div className="mb-10">
              <img
                src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/photo-1451187580459-43490279c0fa-1.webp"
                alt="HelioWatch Solar Observatory"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Description */}
            <div className="space-y-6 mb-10">
              <p className="text-gray-300 leading-relaxed">
                Exploring the Edge of the Solar System is a groundbreaking project focused on reaching and studying the outermost boundaries of our solar neighborhood. This mission aims to gather data from beyond the heliosphere, where solar winds weaken and interstellar space begins. By deploying advanced deep-space probes equipped with high-resolution sensors, the project seeks to unlock mysteries about cosmic radiation,
              </p>
              <p className="text-gray-300 leading-relaxed">
                magnetic fields, and the influence of the Sun far beyond planetary orbits. The information collected will contribute to a better understanding of space weather and the dynamics of interstellar matter.
              </p>
            </div>

            {/* Project Goals */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">What the project aimed to achieve</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The primary goal of the project was to extend human understanding of the solar system's outer edge and its transition into interstellar space. By deploying advanced instruments beyond the heliopause, the mission aimed to measure the composition, temperature, and behavior of interstellar particles and magnetic fields. Another key objective was to observe how the solar wind interacts with the galactic environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                    </svg>
                    <span className="text-gray-300">Automated Financial Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                    </svg>
                    <span className="text-gray-300">Mobile & Desktop Compatibility</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                    </svg>
                    <span className="text-gray-300">Real-Time Data Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                    </svg>
                    <span className="text-gray-300">Goal Setting & Tracking</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed">
                These findings would help scientists refine models of solar influence and space weather, contributing to safer future space missions. Ultimately, the project sought to pave the way for more ambitious deep space exploration and long-duration interstellar travel.
              </p>
            </div>

            {/* Project Success */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">Project Success Key</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Project success hinges on several key factors, including clear communication, defined objectives, and effective teamwork. Establishing realistic timelines and budgets is essential, as is the ability to adapt to changing circumstances. Engaging stakeholders throughout the project lifecycle fosters collaboration and ensures alignment with goals. Regular monitoring and evaluation of progress enable teams to identify challenges early.
              </p>
            </div>
{/* Section Wrapper */}
<div className="mb-10 flex flex-col md:flex-row items-stretch gap-10">
            {/* Additional Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Image-4-1.webp"
                alt="Project Success"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Additional Content */}
            <div className="mb-10">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Establish specific, measurable goals for each project featured in your portfolio. This helps potential clients understand what you aim to achieve and how you measure success. Utilize a structured project management methodology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                  </svg>
                  <span className="text-gray-300">Real-Time Data Analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                  </svg>
                  <span className="text-gray-300">Goal Setting & Tracking</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
                  </svg>
                  <span className="text-gray-300">Collaborative Design Tools</span>
                </li>
              </ul>
            </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end mt-16">
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <a href="https://softivus.com/wp/ BeyondInfinities/portfolio/cosmic-dust-analyzer/" className="group">
                    <span className="text-white group-hover:text-white transition-colors">Next</span>
                    <h6 className="text-white group-hover:text-white transition-colors">
                      Cosmic Dust Analyzer
                    </h6>
                  </a>
                </div>
                <div className="bg-red-500 p-3 rounded-full group hover:bg-red-500 transition-colors">
                  <a href="https://softivus.com/wp/ BeyondInfinities/portfolio/cosmic-dust-analyzer/">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default PortfolioDetails;