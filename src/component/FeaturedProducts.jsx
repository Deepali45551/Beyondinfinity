import React from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Telescope H03.2k",
      oldPrice: "4,165.54৳",
      newPrice: "4,067.54৳",
      image: "/png-telescope-white-background-technology-binoculars-1-3.webp",
    },
    {
      id: 2,
      name: "Astronaut Helmet",
      oldPrice: "1,254.12৳",
      newPrice: "1,054.00৳",
      image: "/png-telescope-white-background-technology-binoculars-1-2.webp",
    },
    {
      id: 3,
      name: "Modern VR Headset",
      oldPrice: "",
      newPrice: "120.00৳",
      image: "/png-binoculars-black-white-background-appliance-1-1.webp",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mb-12">
        <div>
          <p className="text-white font-semibold uppercase tracking-wide text-sm">
            Featured Products
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            Featured Products
          </h2>
        </div>
        <button className="border border-white text-white px-6 py-3 rounded-md mt-6 md:mt-0 hover:bg-white hover:text-black transition">
          More Products
        </button>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#191919] rounded-lg shadow-sm relative group overflow-hidden p-6"
          >
            {/* Wishlist Icon */}
            <button className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 z-20">
              <FaRegHeart className="text-gray-300" />
            </button>

            {/* Product Image with Hover Add to Cart */}
            <div className="relative mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain"
              />
              <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white py-2 flex items-center justify-center gap-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold text-center">
              {product.name}
            </h3>
            <div className="flex justify-center gap-2 mt-2">
              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-white font-medium">
                {product.newPrice}
              </span>
            </div>

            {/* Ratings (static stars) */}
            <div className="flex justify-center mt-3 space-x-1 text-gray-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
