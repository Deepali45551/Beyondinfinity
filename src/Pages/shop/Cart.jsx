import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextCarousels from "./TextCarousels";
import { toast } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const originalPrice = 20.0;
  const discountPrice = 18.0;
  const savings = originalPrice - discountPrice;
  const total = discountPrice * quantity;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemove = () => {
    toast.success("Item removed from cart!");
  };

  const handleApplyCoupon = () => {
    if (!couponCode) {
      toast.error("Please enter a coupon code");
      return;
    }
    toast.success(`Coupon "${couponCode}" applied!`);
    setCouponCode("");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-18">
        <h1 className="text-4xl font-bold">Cart</h1>
        <p className="mt-2">
          <span className="text-gray-400"> BeyondInfinities &gt; </span>
          <span className="text-white font-semibold">Cart</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 bg-black border border-gray-700">
          <div className="flex justify-between border-b border-gray-700 p-4 font-semibold">
            <span>PRODUCT</span>
            <span>TOTAL</span>
          </div>

          {/* Product Row */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-start gap-4">
              <img
                src="https://via.placeholder.com/80x80.png?text=Beanie"
                alt="Product"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <h3 className="font-bold">Beanie with Logo</h3>
                <p className="text-gray-400 line-through">${originalPrice}</p>
                <p className="text-lg">${discountPrice}</p>
                <span className="border border-white px-2 py-1 text-sm">
                  SAVE ${savings.toFixed(2)}
                </span>
                <p className="text-xs mt-2 text-gray-400">
                  This is a simple product.
                </p>

                {/* Quantity */}
                <div className="flex items-center mt-2 border border-gray-700">
                  <button
                    onClick={handleDecrease}
                    className="px-3 py-1 hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={handleRemove}
                  className="text-sm text-blue-400 underline mt-2 block"
                >
                  Remove item
                </button>
              </div>
            </div>
            <div className="text-lg font-semibold">${total.toFixed(2)}</div>
          </div>
        </div>

        {/* Right: Cart Totals */}
        <div className="bg-black border border-gray-700 p-6">
          <h2 className="font-bold mb-4">CART TOTALS</h2>

          {/* Coupon */}
          <button
            className="bg-red-600 w-full py-2 text-white mb-2"
            onClick={() => setShowCoupon(!showCoupon)}
          >
            Add coupons ▼
          </button>

          {/* Show coupon input if clicked */}
          {showCoupon && (
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-grow px-3 py-2 text-black rounded"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-red-600 px-4 py-2 rounded text-white font-semibold"
              >
                Apply
              </button>
            </div>
          )}

          {/* Shipping */}
          <div className="flex justify-between mt-4">
            <span>Free shipping</span>
            <span className="font-semibold">FREE</span>
          </div>

          {/* Total */}
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Estimated total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Checkout */}
          <button
            onClick={handleCheckout}
            className="bg-red-600 w-full py-3 mt-6 rounded text-white font-semibold"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <TextCarousels />
    </div>
  );
};

export default Cart;
