import React, { useEffect } from 'react';
import MarqueeComponent from '../portfolio/MarqueeComponent';

const BlogDetails = () => {
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
    document.querySelectorAll('.fade-up, .fade-in, .slide-up, .slide-left').forEach((el) => {
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Voyager 1 Resumes Sending Data After NASA's Remote Repair
            </h1>
            <div className="text-white text-sm">
              <span className="hover:text-white cursor-pointer"> BeyondInfinities</span>
              <span className="mx-2">›</span>
              <span className="hover:text-white cursor-pointer">Blog</span>
              <span className="mx-2">›</span>
              <span className="hover:text-white cursor-pointer">Space Science</span>
              <span className="mx-2">›</span>
              <span className="text-white">Voyager 1 Resumes Sending Data After NASA's Remote Repair</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container bg-black mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/2948c815-1486-4e48-931f-47163611a8b7.webp" 
              alt="Voyager 1 Resumes Sending Data After NASA's Remote Repair"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              <span>by  BeyondInfinities</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
              </svg>
              <span>May 17, 2025</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
              </svg>
              <a href="https://softivus.com/wp/ BeyondInfinities/category/space-science/" className="hover:text-white transition-colors">
                Space Science
              </a>
            </div>
          </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-white leading-relaxed mb-6 fade-in" style={{opacity: 0, transitionDelay: '0.4s'}}>
                In April 2024, Voyager 1—humanity's farthest spacecraft—began sending garbled data due to a faulty memory chip in its 47-year-old computer. NASA's Jet Propulsion Lab team spent months diagnosing the issue and uploaded a software patch to bypass the damaged hardware.
              </p>

              <p className="text-white leading-relaxed mb-6 fade-in" style={{opacity: 0, transitionDelay: '0.5s'}}>
                The fix worked, and Voyager 1 has resumed transmitting readings about interstellar space. The mission, launched in 1977, has survived multiple near-death experiences thanks to NASA's ingenuity. Its power reserves may last until 2030, after which it will drift silently among the stars.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-6 italic text-white my-8 slide-left" style={{opacity: 0, transform: 'translateX(50px)'}}>
                <p className="text-xl font-semibold">
                  "Voyager 1 is the little spacecraft that could—it's outlived every expectation."
                </p>
                <footer className="text-sm text-white mt-2">
                  — Suzanne Dodd, Voyager Project Manager.
                </footer>
              </blockquote>

              <ul className="list-disc list-inside text-white space-y-2 mb-8 fade-in" style={{opacity: 0, transitionDelay: '0.6s'}}>
                <li>JPL engineers celebrating</li>
                <li>Golden Record replica</li>
                <li>Signal strength graph</li>
              </ul>

            <figure className="my-8">
              <img 
                src="https://softivus.com/wp/ BeyondInfinities/wp-content/uploads/2025/05/5fa2f58b-ca17-4acf-a634-f33201453e8b-1024x576.webp" 
                alt="Voyager 1 mission details"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </figure>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              <a href="https://softivus.com/wp/ BeyondInfinities/tag/deepspac/" className="px-4 py-2 bg-black text-white rounded-full hover:bg-red-500 hover:text-white transition-colors text-sm">
                DeepSpac
              </a>
              <a href="https://softivus.com/wp/ BeyondInfinities/tag/nasa/" className="px-4 py-2 bg-black text-white rounded-full hover:bg-red-500 hover:text-white transition-colors text-sm">
                NASA
              </a>
              <a href="https://softivus.com/wp/ BeyondInfinities/tag/voyager1/" className="px-4 py-2 bg-black text-white rounded-full hover:bg-red-500 hover:text-white transition-colors text-sm">
                Voyager1
              </a>
            </div>
          </div>

          {/* Comments Section */}
          <div id="comments" className="comments-area">
            <h3 className="text-2xl font-bold text-white mb-6">Leave a Reply</h3>
            
            <div className="comment-respond bg-black p-6 rounded-lg shadow-md">
              <form className="comment-form space-y-6">
                <p className="text-sm text-white">
                  <span>Your email address will not be published.</span>{' '}
                  <span className="text-white">Required fields are marked *</span>
                </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in" style={{opacity: 0, transitionDelay: '0.3s'}}>
                      <label htmlFor="author" className="block text-sm font-medium text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Name*"
                        className="comment-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                        required
                      />
                    </div>

                    <div className="fade-in" style={{opacity: 0, transitionDelay: '0.4s'}}>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        className="comment-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="fade-in" style={{opacity: 0, transitionDelay: '0.5s'}}>
                    <label htmlFor="url" className="block text-sm font-medium text-white mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="url"
                      name="url"
                      placeholder="Website"
                      className="comment-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                    />
                  </div>

                  <div className="flex items-center fade-in" style={{opacity: 0, transitionDelay: '0.6s'}}>
                    <input
                      type="checkbox"
                      id="wp-comment-cookies-consent"
                      name="wp-comment-cookies-consent"
                      className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="wp-comment-cookies-consent" className="ml-2 text-sm text-gray-400">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>

                  <div className="fade-in" style={{opacity: 0, transitionDelay: '0.7s'}}>
                    <label htmlFor="comment" className="block text-sm font-medium text-white mb-2">
                      Comment *
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="6"
                      placeholder="Comment"
                      className="comment-input w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeComponent/>
    </>
  );
};

export default BlogDetails;