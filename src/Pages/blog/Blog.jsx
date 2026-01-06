import React, { useEffect } from 'react';
import MarqueeComponent from '../portfolio/MarqueeComponent';

const Blog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Voyager 1 Resumes Sending Data After NASA's Remote Repair",
      excerpt: "NASA engineers fix Voyager 1's corrupted memory from 15 billion miles away, restoring data transmission after 5 months of silence.",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/2948c815-1486-4e48-931f-47163611a8b7.webp",
      category: "Space Science",
      date: "May 17, 2025",
      author: "Ashadul Islam",
      link: "https://softivus.com/wp/ BeyondInfinities/voyager-1-resumes-sending-data-after-nasas-remote-repair/",
      tags: ["deepspac", "nasa", "voyager1"]
    },
    {
      id: 2,
      title: "NASA and SpaceX Study 'Red Dragon' Mars Sample Return Alternative",
      excerpt: "NASA partners with SpaceX to explore a faster, cheaper Mars sample-return mission using a modified Starship ('Red Dragon').",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/932c3864-25ee-42e4-96b0-3d1ee93c8e89.webp",
      category: "Mars Exploration",
      date: "May 17, 2025",
      author: "Ashadul Islam",
      link: "https://softivus.com/wp/ BeyondInfinities/nasa-and-spacex-study-red-dragon-mars-sample-return-alternative/",
      tags: ["marssamples", "nasa", "spacex"]
    },
    {
      id: 3,
      title: "ESA's Ariane 6 Rocket Finally Launches After Years of Delays",
      excerpt: "The European Space Agency's Ariane 6 debuts with a successful maiden flight, restoring Europe's independent access to space.",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/03307ccf-2983-424d-8636-9df93bc216a5.webp",
      category: "Spaceflight",
      date: "May 17, 2025",
      author: "Ashadul Islam",
      link: "https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/",
      tags: ["ariane6", "europespace", "rocketlaunch"]
    },
    {
      id: 4,
      title: "China's Chang'e-6 Mission Returns with First-Ever Far Side Moon Samples",
      excerpt: "China's Chang'e-6 probe has returned to Earth with the first-ever soil samples from the Moon's far side, landing in Inner Mongolia.",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/cc140c4f-5816-416d-aaf2-cce24bb21707.webp",
      category: "Planetary Science",
      date: "May 17, 2025",
      author: "Ashadul Islam",
      link: "https://softivus.com/wp/ BeyondInfinities/chinas-change-6-mission-returns-with-first-ever-far-side-moon-samples/",
      tags: ["chinaspace", "lunarexploration", "moonsamples"]
    },
    {
      id: 5,
      title: "SpaceX's Starship Completes First Orbital Test Flight",
      excerpt: "SpaceX's Starship achieves a successful orbital test flight, bringing Elon Musk's Mars colonization vision closer to reality.",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/be3477c6-c4cf-4b05-b491-681bdab33769.webp",
      category: "Spaceflight",
      date: "May 17, 2025",
      author: "Ashadul Islam",
      link: "https://softivus.com/wp/ BeyondInfinities/spacexs-starship-completes-first-orbital-test-flight/",
      tags: ["mars", "spacex", "starship"]
    }
  ];

  // Sidebar data
  const recentPosts = blogPosts.slice(0, 5);
  const categories = [
    { name: "Lunar Exploration", count: 0, link: "https://softivus.com/wp/ BeyondInfinities/category/lunar-exploration/" },
    { name: "Mars Exploration", count: 0, link: "https://softivus.com/wp/ BeyondInfinities/category/mars-exploration/" },
    { name: "Planetary Science", count: 0, link: "https://softivus.com/wp/ BeyondInfinities/category/planetary-science/" },
    { name: "Space Science", count: 0, link: "https://softivus.com/wp/ BeyondInfinities/category/space-science/" },
    { name: "Spaceflight", count: 0, link: "https://softivus.com/wp/ BeyondInfinities/category/spaceflight/" }
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
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .fade-left, .fade-right, .slide-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          /* Animation keyframes */
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Animation classes */
          .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .fade-left {
            opacity: 0;
            transform: translateX(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .fade-right {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .slide-up {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          /* Hover effects */
          .blog-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          
          .category-badge {
            transition: all 0.3s ease;
          }
          
          .category-badge:hover {
            background-color: #ef4444;
            color: white;
          }
          
          .img-hover-zoom {
            overflow: hidden;
          }
          
          .img-hover-zoom img {
            transition: transform 0.5s ease;
          }
          
          .img-hover-zoom:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Header */}
        <div className="relative bg-gray-900 py-16 overflow-hidden">
          <img 
            src="https://softivus.com/wp/ BeyondInfinities/wp-content/themes/ BeyondInfinities/assets/images/breadcrum_bg.webp" 
            alt="breadcrumb background" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center slide-up" style={{opacity: 0, transform: 'translateY(50px)'}}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Voyager 1 Resumes Sending Data After NASA's Remote Repair
              </h1>
              <div className="text-white text-sm">
                <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
                <span className="mx-2">›</span>
                <span className="text-white">Blog</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container bg-black mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts */}
            <div className="w-full lg:w-8/12">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className="blog-card bg-black rounded-lg shadow-md overflow-hidden fade-up" 
                    style={{ 
                      opacity: 0, 
                      transform: 'translateY(30px)',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Featured Image */}
                    <div className="blog-img img-hover-zoom">
                      <a href={post.link}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white mb-4">
                        <div className="flex items-center fade-right" style={{opacity: 0, transform: 'translateX(30px)'}}>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                          </svg>
                          <span>by {post.author}</span>
                        </div>
                        
                        <div className="flex items-center fade-right" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.1s'}}>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                          </svg>
                          <span>{post.date}</span>
                        </div>

                        <div className="flex items-center fade-right" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.2s'}}>
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                          </svg>
                          <a 
                            href={`https://softivus.com/wp/ BeyondInfinities/category/${post.category.toLowerCase().replace(/\s+/g, '-')}/`} 
                            className="category-badge px-2 py-1 bg-gray-800 rounded-md hover:text-white transition-colors"
                          >
                            {post.category}
                          </a>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 hover:text-white transition-colors fade-left" style={{opacity: 0, transform: 'translateX(30px)'}}>
                        <a href={post.link}>
                          {post.title}
                        </a>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white mb-6 leading-relaxed fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.1s'}}>
                        {post.excerpt}
                      </p>

                      {/* Read More Button */}
                      <div className="btn-area fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.2s'}}>
                        <a href={post.link} className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors group">
                          <span className="mr-2">Read More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className="flex items-center justify-center space-x-2 mt-12 fade-up" style={{opacity: 0, transform: 'translateY(30px)'}}>
                  <span className="px-4 py-2 bg-red-500 text-white rounded-lg">1</span>
                  <a href="https://softivus.com/wp/ BeyondInfinities/blog/page/2/" className="px-4 py-2 text-white hover:text-white transition-colors">2</a>
                  <a href="https://softivus.com/wp/ BeyondInfinities/blog/page/2/" className="px-4 py-2 text-white hover:text-white transition-colors flex items-center">
                    Next
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12">
              <aside className="space-y-8">
                {/* Search Widget */}
                <div className="bg-black p-6 rounded-lg shadow-md fade-left" style={{opacity: 0, transform: 'translateX(30px)'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Search</h3>
                  <form role="search" method="get" className="wp-block-search">
                    <div className="relative">
                      <input 
                        type="search" 
                        placeholder="Search..." 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
                      />
                      <button 
                        type="submit" 
                        className="absolute right-2 top-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-black p-6 rounded-lg shadow-md fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.1s'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
                  <ul className="space-y-3">
                    {recentPosts.map((post, index) => (
                      <li key={post.id} className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                        <a href={post.link} className="text-white hover:text-red-400 transition-colors flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>{post.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Comments Widget */}
                <div className="bg-black p-6 rounded-lg shadow-md fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.2s'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Recent Comments</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                      <span className="font-semibold text-red-400">orbitx</span> on{' '}
                      <a href="https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/#comment-5" className="text-white hover:text-red-400 hover:underline">
                        ESA's Ariane 6 Rocket Finally Launches After Years of Delays
                      </a>
                    </li>
                    <li className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                      <span className="font-semibold text-red-400">orbitx</span> on{' '}
                      <a href="https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/#comment-4" className="text-white hover:text-red-400 hover:underline">
                        ESA's Ariane 6 Rocket Finally Launches After Years of Delays
                      </a>
                    </li>
                    <li className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                      <span className="font-semibold text-red-400">orbitx</span> on{' '}
                      <a href="https://softivus.com/wp/ BeyondInfinities/nasa-and-spacex-study-red-dragon-mars-sample-return-alternative/#comment-3" className="text-white hover:text-red-400 hover:underline">
                        NASA and SpaceX Study "Red Dragon" Mars Sample Return Alternative
                      </a>
                    </li>
                  </ol>
                </div>

                {/* Archives Widget */}
                <div className="bg-black p-6 rounded-lg shadow-md fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.3s'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Archives</h3>
                  <ul>
                    <li className="border-b border-gray-700 pb-2 last:border-b-0 last:pb-0">
                      <a href="https://softivus.com/wp/ BeyondInfinities/2025/05/" className="text-white hover:text-red-400 transition-colors flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        May 2025
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Categories Widget */}
                <div className="bg-black p-6 rounded-lg shadow-md fade-left" style={{opacity: 0, transform: 'translateX(30px)', transitionDelay: '0.4s'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="border-b border-gray-700 pb-2 last:border-b-0 last:pb-0">
                        <a href={category.link} className="text-white hover:text-red-400 transition-colors flex items-center justify-between">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            {category.name}
                          </span>
                          <span className="bg-gray-700 text-xs text-white px-2 py-1 rounded-full">{category.count}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <MarqueeComponent/>
    </>
  );
};

export default Blog;