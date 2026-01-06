import React, { useState, useEffect } from "react";
import MarqueeComponent from "../portfolio/MarqueeComponent";

const AboutUs = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("first-day");
  const [counters, setCounters] = useState({
    missions: 0,
    landings: 0,
    reflights: 0,
  });

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCounters((prev) => ({
        missions: prev.missions < 465 ? prev.missions + 5 : 465,
        landings: prev.landings < 420 ? prev.landings + 5 : 420,
        reflights: prev.reflights < 391 ? prev.reflights + 5 : 391,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const coreValues = [
    {
      title: "Best quality",
      description:
        "Crafted with precision and built to endure, our optics deliver",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 60 60"
        >
          <path d="M30 57.5009C29.8081 57.5009 29.6169 57.4571 29.4406 57.369L20.76 53.029C11.81 48.554 6.25 39.5571 6.25 29.5496V15.0009C6.25 14.6477 6.39937 14.3109 6.66125 14.0746C6.92312 13.8371 7.2725 13.7196 7.62438 13.7571C8.10313 13.8027 19.6 14.749 29.0238 2.97023C29.4975 2.37711 30.5019 2.37711 30.9756 2.97023C40.4006 14.7502 51.8963 13.8021 52.3787 13.7571C52.5522 13.7404 52.7273 13.7601 52.8927 13.815C53.0581 13.8699 53.2103 13.9587 53.3394 14.0758C53.4685 14.1929 53.5717 14.3357 53.6424 14.495C53.7131 14.6543 53.7498 14.8266 53.75 15.0009V29.5496C53.75 39.5571 48.19 48.5534 39.2394 53.0284L30.5588 57.3684C30.3855 57.4557 30.1941 57.5011 30 57.5009ZM8.75 16.2896V29.5502C8.75 38.604 13.7806 46.744 21.8787 50.7927L30 54.8534L38.1213 50.7927C46.2194 46.7434 51.25 38.604 51.25 29.5496V16.2896C47.7469 16.2521 38.2519 15.1984 30 5.70336C21.7488 15.1971 12.2537 16.2521 8.75 16.2896ZM31.25 30.0009H28.75C28.0606 30.0009 27.5 29.4402 27.5 28.7509C27.5 28.0615 28.0606 27.5009 28.75 27.5009H33.125C33.4565 27.5009 33.7745 27.3692 34.0089 27.1347C34.2433 26.9003 34.375 26.5824 34.375 26.2509C34.375 25.9193 34.2433 25.6014 34.0089 25.367C33.7745 25.1326 33.4565 25.0009 33.125 25.0009H31.25V23.1259C31.25 22.7943 31.1183 22.4764 30.8839 22.242C30.6495 22.0076 30.3315 21.8759 30 21.8759C29.6685 21.8759 29.3505 22.0076 29.1161 22.242C28.8817 22.4764 28.75 22.7943 28.75 23.1259V25.0009C26.6819 25.0009 25 26.6827 25 28.7509C25 30.819 26.6819 32.5009 28.75 32.5009H31.25C31.9394 32.5009 32.5 33.0615 32.5 33.7509C32.5 34.4402 31.9394 35.0009 31.25 35.0009H26.875C26.5435 35.0009 26.2255 35.1326 25.9911 35.367C25.7567 35.6014 25.625 35.9193 25.625 36.2509C25.625 36.5824 25.7567 36.9003 25.9911 37.1347C26.2255 37.3692 26.5435 37.5009 26.875 37.5009H28.75V39.3759C28.75 39.7074 28.8817 40.0253 29.1161 40.2597C29.3505 40.4942 29.6685 40.6259 30 40.6259C30.3315 40.6259 30.6495 40.4942 30.8839 40.2597C31.1183 40.0253 31.25 39.7074 31.25 39.3759V37.5009C33.3181 37.5009 35 35.819 35 33.7509C35 31.6827 33.3181 30.0009 31.25 30.0009ZM30 45.6259C22.0731 45.6259 15.625 39.1777 15.625 31.2509C15.625 23.324 22.0731 16.8759 30 16.8759C37.9269 16.8759 44.375 23.324 44.375 31.2509C44.375 39.1777 37.9269 45.6259 30 45.6259ZM30 19.3759C23.4519 19.3759 18.125 24.7027 18.125 31.2509C18.125 37.799 23.4519 43.1259 30 43.1259C36.5481 43.1259 41.875 37.799 41.875 31.2509C41.875 24.7027 36.5481 19.3759 30 19.3759Z" />
        </svg>
      ),
    },
    {
      title: "Money secure",
      description:
        "Crafted with precision and built to endure, our optics deliver",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 60 60"
        >
          <path d="M52.5 10.3125C50.4319 10.3125 48.75 11.9944 48.75 14.0625V25.6247C48.1127 25.4489 47.4402 25.4458 46.8013 25.6157C46.1624 25.7855 45.5802 26.1222 45.1144 26.5912L33.6375 38.0672C33.3753 38.3277 33.1674 38.6377 33.026 38.9792C32.8845 39.3207 32.8123 39.6869 32.8134 40.0566V59.0616C32.8134 59.3102 32.9122 59.5487 33.088 59.7245C33.2638 59.9003 33.5023 59.9991 33.7509 59.9991H45.0009C45.2496 59.9991 45.488 59.9003 45.6638 59.7245C45.8397 59.5487 45.9384 59.3102 45.9384 59.0616V49.5253C45.9384 49.2741 46.0359 49.0397 46.2131 48.8625L55.4269 39.6488C55.9584 39.1181 56.2509 38.4113 56.2509 37.6603V14.0625C56.2509 11.9944 54.5681 10.3125 52.5 10.3125ZM54.375 37.6613C54.375 37.9078 54.2747 38.1497 54.1003 38.3241L44.8866 47.5369C44.6244 47.7974 44.4165 48.1074 44.275 48.4489C44.1336 48.7904 44.0613 49.1566 44.0625 49.5262V58.125H34.6875V40.0575C34.687 39.9343 34.711 39.8123 34.7582 39.6985C34.8054 39.5847 34.8747 39.4814 34.9622 39.3947L46.44 27.9178C46.7835 27.5726 47.2486 27.3757 47.7356 27.3692C48.2226 27.3627 48.6927 27.5472 49.0453 27.8831C49.0584 27.8953 49.0744 27.9019 49.0884 27.9131L49.0922 27.9178C49.4456 28.2722 49.6406 28.7428 49.6406 29.2434C49.6406 29.7441 49.4456 30.2147 49.0922 30.5691L44.0494 35.6119C43.9623 35.6989 43.8933 35.8023 43.8462 35.916C43.7991 36.0297 43.7748 36.1516 43.7748 36.2747C43.7748 36.3978 43.7991 36.5197 43.8462 36.6334C43.8933 36.7471 43.9623 36.8505 44.0494 36.9375C44.1364 37.0245 44.2397 37.0936 44.3535 37.1407C44.4672 37.1878 44.5891 37.212 44.7122 37.212C44.8353 37.212 44.9572 37.1878 45.0709 37.1407C45.1846 37.0936 45.288 37.0245 45.375 36.9375L50.4178 31.8947C50.767 31.5473 51.0438 31.1341 51.2322 30.679C51.4207 30.2239 51.517 29.736 51.5156 29.2434C51.5156 28.3528 51.1922 27.5184 50.625 26.8453V14.0625C50.625 13.0284 51.4659 12.1875 52.5 12.1875C53.5341 12.1875 54.375 13.0284 54.375 14.0625V37.6613ZM14.8856 26.5912C14.4204 26.1213 13.8382 25.784 13.1991 25.6141C12.56 25.4442 11.8872 25.4479 11.25 25.6247V14.0625C11.25 11.9944 9.56813 10.3125 7.5 10.3125C5.43187 10.3125 3.75 11.9944 3.75 14.0625V37.6613C3.75 38.4131 4.0425 39.12 4.57406 39.6497L13.7878 48.8634C13.9622 49.0378 14.0625 49.2797 14.0625 49.5262V59.0625C14.0625 59.3111 14.1613 59.5496 14.3371 59.7254C14.5129 59.9012 14.7514 60 15 60H26.25C26.4986 60 26.7371 59.9012 26.9129 59.7254C27.0887 59.5496 27.1875 59.3111 27.1875 59.0625V40.0575C27.1875 39.3066 26.895 38.5997 26.3634 38.0691L14.8856 26.5912ZM25.3125 58.125H15.9375V49.5262C15.9375 48.7753 15.645 48.0684 15.1134 47.5378L5.89875 38.3231C5.81155 38.2364 5.74245 38.1333 5.69546 38.0197C5.64846 37.906 5.62451 37.7842 5.625 37.6613V14.0625C5.625 13.0284 6.46594 12.1875 7.5 12.1875C8.53406 12.1875 9.375 13.0284 9.375 14.0625V26.8444C8.76569 27.5567 8.4484 28.4732 8.48683 29.4098C8.52526 30.3463 8.91657 31.2337 9.58219 31.8938L14.625 36.9366C14.7119 37.0239 14.8151 37.0933 14.9289 37.1406C15.0426 37.1879 15.1646 37.2122 15.2878 37.2122C15.411 37.2122 15.533 37.1879 15.6467 37.1406C15.7605 37.0933 15.8638 37.0239 15.9506 36.9366C16.0378 36.8496 16.1069 36.7463 16.1541 36.6325C16.2012 36.5188 16.2255 36.3969 16.2255 36.2738C16.2255 36.1506 16.2012 36.0287 16.1541 35.915C16.1069 35.8012 16.0378 35.6979 15.9506 35.6109L10.9078 30.5681C10.5544 30.2137 10.3594 29.7431 10.3594 29.2425C10.3594 28.7419 10.5544 28.2712 10.9078 27.9169L10.9116 27.9122C10.9247 27.9009 10.9416 27.8944 10.9547 27.8822C11.3073 27.5463 11.7774 27.3618 12.2644 27.3683C12.7514 27.3747 13.2165 27.5717 13.56 27.9169L25.0378 39.3938C25.2122 39.5681 25.3125 39.81 25.3125 40.0566V58.125Z" />
        </svg>
      ),
    },
    {
      title: "Environment safe",
      description:
        "Crafted with precision and built to endure, our optics deliver",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 60 60"
        >
          <path d="M31.7521 55.9721C31.3975 55.9721 31.0508 55.8669 30.756 55.6699C30.4611 55.4729 30.2314 55.1929 30.0957 54.8652C29.96 54.5376 29.9245 54.1771 29.9938 53.8293C30.063 53.4815 30.2338 53.1621 30.4846 52.9114C30.7354 52.6607 31.0549 52.49 31.4027 52.4209C31.7505 52.3518 32.111 52.3873 32.4386 52.5231C32.7661 52.6589 33.0461 52.8888 33.243 53.1837C33.4399 53.4786 33.545 53.8253 33.5449 54.1799C33.5442 54.6551 33.3551 55.1107 33.019 55.4467C32.6829 55.7827 32.2273 55.9716 31.7521 55.9721ZM43.8823 56.1425C43.5277 56.1424 43.1811 56.0371 42.8863 55.84C42.5916 55.6429 42.3619 55.3628 42.2263 55.0352C42.0907 54.7076 42.0553 54.3471 42.1246 53.9993C42.1939 53.6516 42.3648 53.3322 42.6156 53.0816C42.8664 52.8309 43.1859 52.6603 43.5337 52.5912C43.8815 52.5222 44.242 52.5578 44.5695 52.6936C44.897 52.8294 45.177 53.0593 45.3739 53.3542C45.5708 53.6491 45.6758 53.9957 45.6757 54.3503C45.6752 54.8256 45.4861 55.2812 45.15 55.6173C44.8139 55.9533 44.3575 56.1422 43.8823 56.1425ZM46.8517 51.7739H30.0595C29.4538 51.7766 28.8637 51.5828 28.3776 51.2216C27.8915 50.8604 27.5357 50.3512 27.3637 49.7705L26.6857 47.5205C26.6339 47.3488 26.623 47.1674 26.6539 46.9908C26.6848 46.8142 26.7565 46.6473 26.8635 46.5034C26.9704 46.3595 27.1096 46.2426 27.2698 46.1621C27.43 46.0815 27.6068 46.0396 27.7861 46.0397H47.0143L50.1493 34.9943C50.1634 34.9227 50.1614 34.8489 50.1436 34.7781C50.1257 34.7074 50.0924 34.6414 50.0461 34.5851C49.998 34.5227 49.9362 34.4722 49.8654 34.4376C49.7946 34.4031 49.7168 34.3854 49.6381 34.3859H29.3701C29.0653 34.3859 28.7731 34.2648 28.5576 34.0494C28.3421 33.8339 28.2211 33.5416 28.2211 33.2369C28.2211 32.9322 28.3421 32.6399 28.5576 32.4244C28.7731 32.2089 29.0653 32.0879 29.3701 32.0879H49.6381C50.066 32.0879 50.4884 32.1855 50.873 32.3733C51.2576 32.561 51.5943 32.8339 51.8577 33.1713C52.121 33.5087 52.3039 33.9017 52.3925 34.3204C52.4812 34.7391 52.4732 35.1725 52.3693 35.5877L48.9877 47.5019C48.9195 47.7425 48.7747 47.9543 48.5752 48.1051C48.3758 48.256 48.1325 48.3376 47.8825 48.3377H29.3323L29.5645 49.1075C29.5959 49.2144 29.6613 49.3082 29.7507 49.3747C29.84 49.4413 29.9486 49.477 30.0601 49.4765H46.8523C47.157 49.4765 47.4493 49.5975 47.6647 49.813C47.8802 50.0285 48.0013 50.3208 48.0013 50.6255C48.0013 50.9302 47.8802 51.2225 47.6647 51.438C47.4493 51.6534 47.157 51.7745 46.8523 51.7745L46.8517 51.7739Z" />
        </svg>
      ),
    },
  ];

  const eventSchedule = [
    {
      id: "first-day",
      title: "First Day",
      date: "Oct 7, 2025",
      events: [
        {
          title: "Stargazing for beginners",
          time: "9:00 am - 10:30 am",
          location: "New York, USA",
          description:
            "Stargazing is a captivating hobby for beginners. Start by finding a dark spot away from city lights. Use a star chart or an app to identify constellations and planets. Enjoy the beauty of the night sky!",
          speaker:
            "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Speaker-Image-3.webp",
        },
        {
          title: "The winter solstice watch",
          time: "9:00 am - 10:30 am",
          location: "New York, USA",
          description:
            "As the winter solstice approaches, many celebrate the longest night of the year. This time marks a shift in seasons, inviting reflection and warmth amidst the cold.",
          speaker:
            "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Speaker-Image-2.webp",
        },
      ],
    },
    {
      id: "second-day",
      title: "Second Day",
      date: "Oct 8, 2025",
      events: [
        {
          title: "Watching Geminid meteors",
          time: "9:00 am - 10:30 am",
          location: "New York, USA",
          description:
            "As the Geminid meteor shower lights up the night sky, stargazers gather to witness this celestial spectacle. With each shooting star, wishes are made, and the universe feels a little closer.",
          speaker:
            "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Speaker-Image-1.webp",
        },
      ],
    },
    {
      id: "third-day",
      title: "Third Day",
      date: "Oct 9, 2025",
      events: [
        {
          title: "Polar lights study trip",
          time: "9:00 am - 10:30 am",
          location: "New York, USA",
          description:
            'In the world of digital design, many software tools and online platforms have adopted placeholder text as their standard. Searching for "placeholder text" reveals a plethora of websites still in development.',
          speaker:
            "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/Speaker-Image.webp",
        },
      ],
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Ashadul Islam",
      role: "AI Researcher",
      image:
        "/team1.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      id: 2,
      name: "Ethan Fischer",
      role: "Marketing Strategist",
      image:
        "/team2.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      id: 3,
      name: "Emily Zhao",
      role: "Project Manager",
      image:
        "/team3.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      id: 4,
      name: "Liam Patel",
      role: "Data Analyst",
      image:
        "/team4.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      id: 5,
      name: "Sofia Reed",
      role: "UI/UX Designer",
      image:
        "/team5.webp",
      social: ["facebook", "twitter", "linkedin"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jonathan Keenes",
      role: "CEO and Founder @ BeFlow Studio",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Profile-picture.webp",
      quote:
        "Visiting the Astronomy Museum was a transformative experience for my family. The interactive exhibits kept our kids engaged for hours, and the planetarium show. I found the real-time telescope feed mesmerizing. This place doesn't just teach",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Science Educator",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Profile-picture.webp",
      quote:
        "An incredible journey through the cosmos! The exhibits are both educational and inspiring, making complex astronomical concepts accessible to all ages.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Astrophotographer",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Profile-picture.webp",
      quote:
        "The observatory facilities are world-class. I was able to capture stunning images of distant galaxies using their professional-grade telescopes.",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "ESA's Ariane 6 Rocket Finally Launches After Years of Delays",
      category: "Spaceflight",
      date: "May 17, 2025",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/03307ccf-2983-424d-8636-9df93bc216a5-416x288.webp",
      link: "https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/",
    },
    {
      id: 2,
      title:
        "China's Chang'e-6 Mission Returns with First-Ever Far Side Moon Samples",
      category: "Planetary Science",
      date: "May 17, 2025",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/cc140c4f-5816-416d-aaf2-cce24bb21707-416x288.webp",
      link: "https://softivus.com/wp/ BeyondInfinities/chinas-change-6-mission-returns-with-first-ever-far-side-moon-samples/",
    },
    {
      id: 3,
      title: "SpaceX's Starship Completes First Orbital Test Flight",
      category: "Spaceflight",
      date: "May 17, 2025",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/be3477c6-c4cf-4b05-b491-681bdab33769-416x288.webp",
      link: "https://softivus.com/wp/ BeyondInfinities/spacexs-starship-completes-first-orbital-test-flight/",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
                About Us
              </h1>
              <div className="text-white text-sm">
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  BeyondInfinities
                </span>
                <span className="mx-2">›</span>
                <span className="text-white">About Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container bg-black mx-auto px-4 py-12">
          <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden">
      {/* Background decorative element (absolute positioned) */}
      <div className="absolute hidden md:block md:top-0 md:right-0 md:left-auto md:bottom-auto z-0">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 transform -skew-x-12 transition-all duration-1000"></div>
          <img 
            decoding="async" 
            className="relative w-64 opacity-70" 
            src="ttps://softivus.com/wp/spacly/wp-content/uploads/2025/05/Vector.webp" 
            alt="decoration"
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column */}
          <div className="lg:w-1/2">
            {/* Heading section */}
            <div className="mb-12">
              <span className="text-red-500 font-semibold tracking-widest text-xs uppercase block mb-4">
                ABOUT SPACLY
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Reaching Beyond for a Better World
              </h2>
            </div>
            
            {/* Main image */}
            <div className="relative overflow-hidden rounded-lg mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 transform -skew-x-12 transition-all duration-1000"></div>
              <img 
                decoding="async" 
                className="w-full h-auto object-cover rounded-lg" 
                src="https://softivus.com/wp/spacly/wp-content/uploads/2025/05/Image.webp" 
                alt="Spacly mission"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              
              {/* Secondary image and text section */}
              <div className="mb-10">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 transform -skew-x-12 transition-all duration-1000"></div>
                  <img 
                    decoding="async" 
                    className="w-full h-auto object-cover rounded-lg" 
                    src="https://softivus.com/wp/spacly/wp-content/uploads/2025/05/Image-1-1.webp" 
                    alt="Spacly technology"
                  />
                </div>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Founded with a vision to advance science and technology, we bring together top engineers, scientists, and visionaries to push the boundaries of what's possible. Every satellite we launch, and every partnership we forge,
                </p>
              </div>

              {/* Rotating decorative element */}
              <div className="absolute -bottom-24 -right-10 opacity-40">
                <img 
                  decoding="async" 
                  className="animate-spin-slow w-28 h-28" 
                  src="https://softivus.com/wp/spacly/wp-content/uploads/2025/05/Container.webp" 
                  alt="decoration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-black rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">
                {counters.missions}
              </div>
              <div className="text-white">Completed Missions</div>
            </div>
            <div className="text-center bg-black rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">
                {counters.landings}
              </div>
              <div className="text-white">Total Landings</div>
            </div>
            <div className="text-center bg-black rounded-xl shadow-lg p-8">
              <div className="text-4xl font-bold text-white mb-2">
                {counters.reflights}
              </div>
              <div className="text-white">Total Reflights</div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="text-white font-semibold tracking-wider">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Schedule Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="text-white font-semibold tracking-wider">
                EVENT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Event Schedule
              </h2>
            </div>

            <div className="bg-black rounded-xl shadow-lg overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex flex-wrap">
                  {eventSchedule.map((day) => (
                    <button
                      key={day.id}
                      className={`px-6 py-4 font-medium text-sm ${
                        activeTab === day.id
                          ? "text-white border-b-2 border-red-500"
                          : "text-white hover:text-white"
                      }`}
                      onClick={() => setActiveTab(day.id)}
                    >
                      {day.title}
                      <span className="block text-xs mt-1">{day.date}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {eventSchedule.map((day) => (
                  <div
                    key={day.id}
                    className={`${activeTab === day.id ? "block" : "hidden"}`}
                  >
                    {day.events.map((event, index) => (
                      <div key={index} className="mb-8 last:mb-0">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-shrink-0">
                            <img
                              src={event.speaker}
                              alt={event.title}
                              className="w-24 h-24 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {event.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 mb-3">
                              <span className="flex items-center text-white">
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {event.time}
                              </span>
                              <span className="flex items-center text-white">
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {event.location}
                              </span>
                            </div>
                            <p className="text-white">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/4L9BB2wm6WI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=4L9BB2wm6WI"
                title="galaxy universe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-3xl text-center mx-auto text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Experience the Universe Like Never Before
                </h2>
                <p className="text-xl mb-8">
                  Join us for stargazing nights, space talks, and cosmic
                  discoveries. Whether you're a curious mind or a seasoned
                  astronomer
                </p>
                <button className="bg-red-500 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Join a Night Sky Tour
                </button>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="text-white font-semibold mb-2">Space explorers</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Meet the crew
                </h2>
                <button className="text-white hover:text-white font-medium">
                  View more crew →
                </button>
              </div>

              {/* First row of team members */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {teamMembers.slice(0, 2).map((member) => (
                  <div
                    key={member.id}
                    className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-white mb-4">{member.role}</p>
                        <div className="flex space-x-4">
                          {member.social.map((platform) => (
                            <a
                              key={platform}
                              href="#"
                              className="text-white hover:text-white"
                            >
                              <i className={`fab fa-${platform}`}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row of team members */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.slice(2).map((member) => (
                  <div
                    key={member.id}
                    className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-white mb-4">{member.role}</p>
                      <div className="flex space-x-4">
                        {member.social.map((platform) => (
                          <a
                            key={platform}
                            href="#"
                            className="text-white hover:text-white"
                          >
                            <i className={`fab fa-${platform}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <div className="relative max-w-4xl mx-auto bg-black rounded-xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/5 mb-6 md:mb-0">
                    <img
                      src={testimonials[activeSlide].image}
                      alt={testimonials[activeSlide].name}
                      className="w-48 h-48 object-cover rounded-full mx-auto"
                    />
                    <h3 className="text-xl font-bold text-center mt-4">
                      {testimonials[activeSlide].name}
                    </h3>
                    <p className="text-white text-center">
                      {testimonials[activeSlide].role}
                    </p>
                  </div>

                  <div className="md:w-3/5 md:pl-8">
                    <img
                      src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/06/Frame-1.png"
                      alt="Quote"
                      className="w-12 h-12 mb-4"
                    />
                    <p className="text-white text-lg italic">
                      "{testimonials[activeSlide].quote}"
                    </p>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md hover:bg-black"
                >
                  <i className="fas fa-chevron-left text-white"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md hover:bg-black"
                >
                  <i className="fas fa-chevron-right text-white"></i>
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        activeSlide === index ? "bg-red-500" : "bg-red-500"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="text-white font-semibold mb-2">news & blog</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Insider Tips from the Top
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-white mb-3">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-white transition-colors duration-300">
                        <a href={post.link}>{post.title}</a>
                      </h3>
                      <a
                        href={post.link}
                        className="text-white hover:text-white font-medium flex items-center"
                      >
                        Read more
                        <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeComponent />
    </>
  );
};

export default AboutUs;
