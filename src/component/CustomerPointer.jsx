import React, { useEffect, useState } from "react";

const CustomerPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoverText, setIsHoverText] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if element under cursor is text
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (
        el &&
        ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6"].includes(el.tagName)
      ) {
        setIsHoverText(true);
      } else {
        setIsHoverText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHoverText ? 2.2 : 1})`,
      }}
      className={`
        pointer-events-none fixed z-50
        w-16 h-16
        rounded-full
        border-2 border-pink-500
        transition-all duration-300 ease-out
        flex items-center justify-center
        shadow-[0_0_25px_rgba(255,100,100,0.7)]
      `}
    >
      {/* Hollow circle effect (transparent center, glowing border) */}
      <div
        className={`
          absolute inset-0 rounded-full
          border-4 border-transparent
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
          animate-spin-slow opacity-80
        `}
        style={{
          WebkitMask: "radial-gradient(circle, transparent 55%, black 60%)",
          mask: "radial-gradient(circle, transparent 55%, black 60%)",
        }}
      ></div>

      {/* Soft glow ring */}
      <div
        className={`
          absolute inset-0 rounded-full
          blur-xl opacity-40
          bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400
        `}
      ></div>
    </div>
  );
};

export default CustomerPointer;
