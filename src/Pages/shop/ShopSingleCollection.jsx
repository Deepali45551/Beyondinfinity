import React, { useState } from "react";
import TextCarousels from "./TextCarousels";
import { toast } from "react-hot-toast";

const ShopSingleCollection = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    name: "Logo Collection",
    price: 18,
    originalPrice: 20,
    sku: "logo-collection",
    category: "Accessories",
    img: "https://dummyimage.com/400x400/bae6fd/000000.png&text=Beanie",
  };

  const handleAddToCart = (item, qty) => {
    toast.success(`${qty} ${item.name} added to cart`);
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-18">
      {/* Breadcrumb */}
     

      {/* Title */}
      <h1 className="text-2xl font-bold mb-8 text-center">Shop Details</h1>
      <div className="flex justify-center mb-8">
        <div className="text-sm text-gray-400">
          <span className="hover:underline cursor-pointer"> BeyondInfinities</span> &gt;{" "}
          <span className="hover:underline cursor-pointer">Products</span> &gt;{" "}
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Product Image */}
        <div className="relative bg-gray-100 p-6 flex justify-center">
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">
            Sale
          </span>
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-400 mb-2">This is a simple product.</p>
          <p className="text-lg font-bold mb-4">
            <span className="line-through text-gray-500 mr-2">
              ${product.originalPrice.toFixed(2)}
            </span>{" "}
            ${product.price.toFixed(2)}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-600 bg-black text-white"
            />
            <button
              onClick={() => handleAddToCart(product, quantity)}
              className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
            >
              Add to cart
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold">SKU:</span> {product.sku}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-5xl mx-auto mt-10 border-t border-gray-700 pt-6">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-3 py-1 text-sm ${activeTab === "description"
                ? "bg-red-600 text-white"
                : "bg-black border border-gray-700"
              }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={`px-3 py-1 text-sm ${activeTab === "reviews"
                ? "bg-red-600 text-white"
                : "bg-black border border-gray-700"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </div>

        <div className="text-gray-400 text-sm">
          {activeTab === "description" && (
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          )}

          {activeTab === "reviews" && <p>No reviews yet.</p>}
        </div>
      </div>
      <TextCarousels />
    </div>
  );
};

export default ShopSingleCollection;
