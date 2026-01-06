import React, { useState } from 'react';

const OpticsProductShowcase = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "TELESCOPE H03.2K",
      specs: "4,366.64m - 0,007.54s",
      code: "0:0:0:0:0",
      image: "/png-telescope-white-background-technology-binoculars-1-3.webp" // Replace with your image path
    },
    {
      id: 2,
      name: "SMART WATCH SCREEN",
      specs: "09:00m - 22:00h",
      code: "0:0:0:0:0",
      image: "/watch.png" // Replace with your image path
    },
    {
      id: 3,
      name: "ASTRONAUT HELMET",
      specs: "5,864.58m - 1,064.00m",
      code: "0:0:0:0:0",
      image: "/png-telescope-white-background-technology-binoculars-1-2.webp" // Replace with your image path
    },
    {
      id: 4,
      name: "BLACK BINOCULARS",
      specs: "09:00m - 23:00h",
      code: "0:0:0:0:0",
      image: "/binoculars.png" // Replace with your image path
    },
    {
      id: 5,
      name: "MODERN VR HELMSET",
      specs: "130.00m",
      code: "0:0:0:0:0",
      image: "/png-binoculars-black-white-background-appliance-1-1.webp" // Replace with your image path
    },
    {
      id: 6,
      name: "TRUSS TUBE TELESCOPE",
      specs: "09:00m - 23:00h",
      code: "0:0:0:0:0",
      image: "/OS-16RC-TT.webp" // Replace with your image path
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="bg-black text-white py-12 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
          DISCOVER OPTICS BUILT FOR <span className="font-bold">CLARITY, PRECISION</span>
        </h1>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-200 transition-colors">
          Buy Now
        </button>
        <h2 className="text-2xl mt-10 font-light tracking-widest">NEW TITUS</h2>
      </header>

      {/* Products Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">OUR PRODUCTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image with Hover Effect */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay Text */}
                <div className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm">{product.specs}</p>
                  <p className="text-sm mt-1">{product.code}</p>
                </div>
              </div>
              
              {/* Product Info (Visible by default) */}
              <div className="mt-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.specs}</p>
                <p className="text-gray-600">{product.code}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">OUR HAPPY CUSTOMERS</h2>
          <blockquote className="text-lg italic text-gray-700 leading-relaxed mb-8">
            "I can share space amenities to reduce just impact while maintaining savings. My findings are innovative and my coach says my cash has never been stronger. Who knew advanced training could benefit from mistakes?"
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="font-bold">Snash Lin</p>
            <p className="text-gray-600">Olympic Oymara</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpticsProductShowcase;