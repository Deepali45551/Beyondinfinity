import React, { useEffect } from 'react';
import MarqueeComponent from '../portfolio/MarqueeComponent';

const BlogStyleOne = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Voyager 1 Resumes Sending Data After NASA's Remote Repair",
      excerpt: "In April 2024, Voyager 1—humanity's farthest spacecraft—began sending garbled data due to a faulty memory...",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/2948c815-1486-4e48-931f-47163611a8b7-1024x576.webp",
      category: "Space Science",
      date: "May 17, 2025",
      comments: 0,
      link: "https://softivus.com/wp/ BeyondInfinities/voyager-1-resumes-sending-data-after-nasas-remote-repair/",
      filter: "space-science"
    },
    {
      id: 2,
      title: "NASA and SpaceX Study 'Red Dragon' Mars Sample Return Alternative",
      excerpt: "Facing budget cuts and complexity issues with its original Mars Sample Return (MSR) plan, NASA...",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/932c3864-25ee-42e4-96b0-3d1ee93c8e89-1024x576.webp",
      category: "Mars Exploration",
      date: "May 17, 2025",
      comments: 1,
      link: "https://softivus.com/wp/ BeyondInfinities/nasa-and-spacex-study-red-dragon-mars-sample-return-alternative/",
      filter: "mars-exploration"
    },
    {
      id: 3,
      title: "ESA's Ariane 6 Rocket Finally Launches After Years of Delays",
      excerpt: "After a decade of development and multiple delays, ESA's Ariane 6 rocket launched flawlessly from...",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/03307ccf-2983-424d-8636-9df93bc216a5-1024x576.webp",
      category: "Spaceflight",
      date: "May 17, 2025",
      comments: 2,
      link: "https://softivus.com/wp/ BeyondInfinities/esas-ariane-6-rocket-finally-launches-after-years-of-delays/",
      filter: "spaceflight"
    },
    {
      id: 4,
      title: "China's Chang'e-6 Mission Returns with First-Ever Far Side Moon Samples",
      excerpt: "China's Chang'e-6 probe has returned to Earth with the first-ever soil samples from the Moon's...",
      image: "https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/cc140c4f-5816-416d-aaf2-cce24bb21707-1024x576.webp",
      category: "Planetary Science",
      date: "May 17, 2025",
      comments: 0,
      link: "https://softivus.com/wp/ BeyondInfinities/chinas-change-6-mission-returns-with-first-ever-far-side-moon-samples/",
      filter: "planetary-science"
    }
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
    document.querySelectorAll('.fade-up, .fade-in, .slide-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <div className="relative bg-gray-900 py-16 overflow-hidden">
        <img 
          src="https://softivus.com/wp/ BeyondInfinities/wp-content/themes/ BeyondInfinities/assets/images/breadcrum_bg.webp" 
          alt="breadcrumb background" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 highlight-cursor-head">
              Blog Style one
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="text-white">Blog Style one</span>
            </div>
          </div>
        </div>
      </div>

        {/* Main Content */}
        <div className="container bg-black mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="category-badge px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="blog-content p-6">
                    {/* Meta Information */}
                    <ul className="blog-meta flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      {post.comments > 0 && (
                        <li className="flex items-center fade-in" style={{opacity: 0, transitionDelay: '0.2s'}}>
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                          </svg>
                          <span>{post.comments} Comments</span>
                        </li>
                      )}
                      <li className="flex items-center fade-in" style={{opacity: 0, transitionDelay: '0.3s'}}>
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                        </svg>
                        <span>{post.date}</span>
                      </li>
                    </ul>

                    {/* Title */}
                    <h5 className="title text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 fade-in" style={{opacity: 0, transitionDelay: '0.4s'}}>
                      <a href={post.link}>
                        {post.title}
                      </a>
                    </h5>

                    {/* Excerpt */}
                    <p className="txt text-gray-300 mb-6 leading-relaxed fade-in" style={{opacity: 0, transitionDelay: '0.5s'}}>
                      {post.excerpt}
                    </p>

                  {/* Read More Button */}
                  <div className="blog_footer flex justify-between items-center">
                    <div className="btn-part">
                      <a 
                        href={post.link} 
                        className="readon-arrow inline-flex items-center text-white hover:text-white font-semibold transition-colors group/arrow"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover/arrow:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="themephi-pagination-area flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <span className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold">1</span>
            <a 
              href="https://softivus.com/wp/ BeyondInfinities/blog-style-one/page/2/" 
              className="px-4 py-2 text-white hover:text-white transition-colors font-semibold"
            >
              2
            </a>
            <a 
              href="https://softivus.com/wp/ BeyondInfinities/blog-style-one/page/2/" 
              className="px-4 py-2 text-white hover:text-white transition-colors font-semibold flex items-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .highlight-cursor-head {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        
        .highlight-cursor-head::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #4F46E5, #EC4899);
          transition: width 0.3s ease;
        }
        
        .highlight-cursor-head:hover::after {
          width: 100%;
        }
        
        .readon-arrow {
          position: relative;
          overflow: hidden;
        }
        
        .readon-arrow::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: currentColor;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        
        .readon-arrow:hover::after {
          transform: translateX(0);
        }
        
        .image-part::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .image-part:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
    <MarqueeComponent/>
    </>
  );
};

export default BlogStyleOne;