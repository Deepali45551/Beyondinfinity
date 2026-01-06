import React, { useState } from "react";
import TextCarousels from "./TextCarousels";
import { useCart } from "./CartContext"; // ✅ import global cart

// Mock 20 products
const extensions = [
  "jpg","jpg","jpg","jpg","jpg","jpg","jpg","jpg",  // 1–8
  "webp","webp","webp","webp","webp","webp",        // 9–14
  "jpg","jpg","jpg","jpg","jpg","jpg"               // 15–20
];

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100 + 10).toFixed(2),
  oldPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
  image: `/product/product${i + 1}.${extensions[i]}`,
  sale: Math.random() > 0.5,
}));

const Shop = () => {
  const { cart, addToCart } = useCart(); // ✅ use global cart
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Paginated products
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white px-10 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mt-12">Shop</h1>
      <p className="text-center text-gray-400 mt-2"> BeyondInfinities &gt; Shop</p>

      {/* Sorting + Results Info */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-gray-300">
          Showing {startIndex + 1}–
          {Math.min(startIndex + productsPerPage, products.length)} of{" "}
          {products.length} results
        </p>
        <select className="bg-black border border-gray-600 px-3 py-2 rounded text-white">
          <option>Default sorting</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#0d0d0d] p-4 border border-gray-800"
          >
            {/* Image Container */}
            <div className="relative bg-gray-100 h-64 flex items-center justify-center">
              {/* Sale Badge */}
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 font-bold rounded">
                  Sale!
                </span>
              )}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            {/* Name + Price */}
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <div className="flex items-center gap-2">
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm">
                  {product.oldPrice}$
                </span>
              )}
              <span className="text-white font-bold">{product.price}$</span>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => addToCart(product)} // ✅ global add
                className="bg-black border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                Add to cart
              </button>
              <button className="bg-black border border-red-600 text-red-600 px-3 py-2 text-sm hover:bg-red-600 hover:text-white transition">
                ♥
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 border ${
            currentPage === 1 ? "border-gray-600 text-gray-600" : "border-white"
          }`}
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-2 border ${
              currentPage === i + 1
                ? "bg-white text-black border-white"
                : "border-white text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 border ${
            currentPage === totalPages
              ? "border-gray-600 text-gray-600"
              : "border-white"
          }`}
        >
          →
        </button>
      </div>

      {/* Cart Preview (optional – can delete this if only showing in Navbar) */}
      {cart.length > 0 && (
        <div className="mt-10 text-center">
          <h2 className="text-xl font-bold">🛒 Cart ({cart.length} items)</h2>
          <ul className="mt-4 text-gray-300">
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - {item.price}$
              </li>
            ))}
          </ul>
        </div>
      )}

      <TextCarousels />
    </div>
  );
};

export default Shop;
