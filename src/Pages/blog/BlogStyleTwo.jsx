import React, { useEffect } from "react";
import MarqueeComponent from "../portfolio/MarqueeComponent";

const BlogStyleTwo = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "ESA's Ariane 6 Rocket Finally Launches After Years of Delays",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/03307ccf-2983-424d-8636-9df93bc216a5-1024x576.webp",
      category: "Spaceflight",
      link: "https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/",
      filter: "spaceflight",
    },
    {
      id: 2,
      title:
        "China's Chang'e-6 Mission Returns with First-Ever Far Side Moon Samples",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/cc140c4f-5816-416d-aaf2-cce24bb21707-1024x576.webp",
      category: "Planetary Science",
      link: "https://softivus.com/wp/ BeyondInfinities/chinas-change-6-mission-returns-with-first-ever-far-side-moon-samples/",
      filter: "planetary-science",
    },
    {
      id: 3,
      title: "SpaceX's Starship Completes First Orbital Test Flight",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/be3477c6-c4cf-4b05-b491-681bdab33769-1024x576.webp",
      category: "Spaceflight",
      link: "https://softivus.com/wp/ BeyondInfinities/spacexs-starship-completes-first-orbital-test-flight/",
      filter: "spaceflight",
    },
    {
      id: 4,
      title: "NASA's Artemis III Mission to Land Humans on Moon by 2026",
      image:
        "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/69e61b29-387d-41a4-a892-8c6561eaa8b0-1024x576.webp",
      category: "Lunar Exploration",
      link: "https://softivus.com/wp/ BeyondInfinities/nasas-artemis-iii-mission-to-land-humans-on-moon-by-2026/",
      filter: "lunar-exploration",
    },
  ];

  // Add animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .fade-in, .slide-up, .slide-left, .slide-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-black">
      {/* Breadcrumb Header */}
      <div className="relative bg-gray-900 py-16 overflow-hidden">
        <img
          src="https://softivus.com/wp/ BeyondInfinities/wp-content/themes/ BeyondInfinities/assets/images/breadcrum_bg.webp"
          alt="breadcrumb background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="container mx-auto px-4 relative z-90">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog Style Two
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white">Blog Style Two</span>
            </div>
          </div>
        </div>
      </div>

        <div className="container-fluid bg-black mx-auto px-4 py-12">
          {/* Flex Container for Side-by-Side Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`grid-item col-span-1 filter_${post.filter} fade-up blog-card`}
                    style={{ 
                      opacity: 0, 
                      transform: 'translateY(30px)',
                      transitionDelay: `${index * 0.15}s`
                    }}
                  >
                    <article className="bg-black rounded-lg shadow-md overflow-hidden group border border-gray-800">
                      {/* Featured Image */}
                      <div className="image-part img-hover-zoom relative overflow-hidden">
                        <a href={post.link}>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                          />
                        </a>
                        <div className="absolute top-4 left-4 z-10">
                          <span className="category-badge px-3 py-1 text-white text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="blog-content p-6">
                        {/* Title */}
                        <h5 className="title text-xl font-bold text-white mb-4 transition-colors">
                          <a href={post.link} className="title-link group-hover:text-white">
                            {post.title}
                          </a>
                        </h5>
                        
                        {/* Read More Button */}
                        <div className="mt-4 fade-in" style={{opacity: 0, transitionDelay: '0.4s'}}>
                          <a 
                            href={post.link} 
                            className="inline-flex items-center text-red-500 hover:text-white font-semibold transition-colors group/arrow"
                          >
                            Read More
                            <svg className="w-4 h-4 ml-2 group-hover/arrow:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

            {/* Pagination */}
            <div className="themephi-pagination-area flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold">
                  1
                </span>
                <a
                  href="https://softivus.com/wp/ BeyondInfinities/blog-style-two/page/2/"
                  className="px-4 py-2 text-white hover:text-white transition-colors font-semibold"
                >
                  2
                </a>
                <a
                  href="https://softivus.com/wp/ BeyondInfinities/blog-style-two/page/2/"
                  className="px-4 py-2 text-white hover:text-white transition-colors font-semibold flex items-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>

            {/* Right Column: Premium Access */}
            <div className="w-full lg:w-1/3 premium-card py-8 px-6 rounded-lg shadow-lg slide-left" style={{opacity: 0, transform: 'translateX(50px)'}}>
              <div className="text-center max-w-full mx-auto">
                {/* Icon */}
                <div className="mb-6 slide-up" style={{opacity: 0, transform: 'translateY(30px)', transitionDelay: '0.2s'}}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-in" style={{opacity: 0, transitionDelay: '0.3s'}}>
                  Get Premium Access to In-Depth Blogs
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8 fade-in" style={{opacity: 0, transitionDelay: '0.4s'}}>
                  Post no so what deal evil rent by real in. But her ready least
                  set lived spite solid. Sight house has sex never.
                </p>

                {/* Features List */}
                <ul className="text-left text-gray-300 mb-8 space-y-2 fade-in" style={{opacity: 0, transitionDelay: '0.5s'}}>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive content
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Ad-free experience
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Early access to articles
                  </li>
                </ul>

                {/* Subscribe Button */}
                <div className="fade-in" style={{opacity: 0, transitionDelay: '0.6s'}}>
                  <a
                    href="#"
                    className="subscribe-btn inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Subscribe now!
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
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

export default BlogStyleTwo;