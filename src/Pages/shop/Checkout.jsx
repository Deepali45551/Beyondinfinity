import React, { useState } from "react";
import TextCarousels from "./TextCarousels";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    country: "Bangladesh",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "Dhaka",
    postal: "",
    phone: "",
    sameAsBilling: true,
    note: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! (mock functionality)");
    console.log("Order data:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-18">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <p className="mt-2">
          <span className="text-gray-400"> BeyondInfinities &gt; </span>
          <span className="text-white font-semibold">Checkout</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-black border border-gray-700 p-6 space-y-6"
        >
          {/* Contact Info */}
          <div>
            <h2 className="font-bold mb-2">Contact Information</h2>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-2 rounded"
              required
            />
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="font-bold mb-2">Shipping address</h2>

            {/* Country */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-2 rounded mb-3"
            >
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
                required
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-2 rounded mt-3"
              required
            />

            <input
              type="text"
              name="apartment"
              placeholder="Add apartment, suite, etc."
              value={formData.apartment}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-2 rounded mt-3"
            />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input
                type="text"
                name="postal"
                placeholder="Postal code (optional)"
                value={formData.postal}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-2 rounded"
              />
            </div>

            <label className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                name="sameAsBilling"
                checked={formData.sameAsBilling}
                onChange={handleChange}
              />
              Use same address for billing
            </label>
          </div>

          {/* Shipping options */}
          <div>
            <h2 className="font-bold mb-2">Shipping options</h2>
            <label className="flex items-center gap-2">
              <input type="radio" checked readOnly />
              Free shipping <span className="ml-auto font-semibold">FREE</span>
            </label>
          </div>

          {/* Payment Options */}
          <div>
            <h2 className="font-bold mb-2">Payment options</h2>
            <div className="bg-red-900 text-red-200 p-3 rounded border border-red-700">
              There are no payment methods available. This may be an error on
              our side. Please contact us if you need help placing your order.
            </div>
          </div>

          {/* Note */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="noteCheck"
              onChange={handleChange}
            />
            Add a note to your order
          </label>
          {formData.noteCheck && (
            <textarea
              name="note"
              placeholder="Write a note..."
              value={formData.note}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 p-2 rounded"
            />
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="px-4 py-2 border border-gray-600 rounded"
            >
              ← Return to Cart
            </button>
            <button
              type="submit"
              className="bg-red-600 px-6 py-2 rounded text-white font-semibold"
            >
              Place Order
            </button>
          </div>
        </form>

        {/* Right: Order Summary */}
        <div className="bg-black border border-gray-700 p-6">
          <h2 className="font-bold mb-4">Order summary</h2>

          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://via.placeholder.com/60x60.png?text=Beanie"
              alt="Product"
              className="w-16 h-16 rounded"
            />
            <div>
              <h3 className="font-semibold">Beanie with Logo</h3>
              <p className="text-gray-400 text-sm">18.00৳ × 1</p>
              <p className="text-xs text-gray-500">This is a simple product.</p>
            </div>
            <span className="ml-auto font-semibold">18.00৳</span>
          </div>

          {/* Coupons */}
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Enter code"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 text-white rounded-r-md">
              Apply
            </button>
          </div>


          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>18.00৳</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Free shipping</span>
            <span>FREE</span>
          </div>

          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Total</span>
            <span>18.00৳</span>
          </div>
        </div>
      </div>
      <TextCarousels />
    </div>
  );
};

export default Checkout;
