import React from "react";
import { Calendar, MessageSquare } from "lucide-react";

const BlogSection = () => {
  // Updated blog data with content based on the "Beyond Infinities" business plan segments
  const blogs = [
    {
      id: 1,
      category: "Satellite & Payloads",
      title: "Manufacturing the Future: Inside Our Nano-Satellite Lab",
      date: "Aug 28, 2025",
      comments: 3,
      img: "/2948c815-1486-4e48-931f-47163611a8b7-1024x576.webp",
    },
    {
      id: 2,
      category: "Launch Solutions",
      title: "Rethinking Reusability: Lowering the Cost of Space Access",
      date: "Aug 20, 2025",
      comments: 1,
      img: "/932c3864-25ee-42e4-96b0-3d1ee93c8e89-1024x576.webp",
    },
    {
      id: 3,
      category: "In-Space Services",
      title: "From Debris to Orbit: The Promise of On-Orbit Servicing",
      date: "Aug 15, 2025",
      comments: 2,
      img: "/03307ccf-2983-424d-8636-9df93bc216a5-1024x576.webp",
    },
  ];

  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-red-600 font-semibold uppercase text-sm">Blog</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Insider Tips From The Top
          </h2>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold">
          More Blogs
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-black">
            {/* Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-60 object-cover rounded-md"
            />
            {/* Content */}
            <div className="mt-4">
              <p className="text-red-600 uppercase text-xs font-bold tracking-wide">
                {blog.category}
              </p>
              <h3 className="text-lg md:text-xl font-semibold mt-2 leading-snug">
                {blog.title}
              </h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm mt-3">
                {blog.comments > 0 && (
                  <div className="flex items-center gap-1">
                    <MessageSquare size={16} />
                    <span>{blog.comments} Comments</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;