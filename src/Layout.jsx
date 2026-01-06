import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import CustomerPointer from "./component/CustomerPointer";
import { Toaster } from "react-hot-toast"; // <-- import Toaster

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomerPointer />
        <Toaster 
        position="top-right" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000,
          style: {
            padding: "16px",
            color: "#fff",
            background: "#111",
          },
        }}
      />

      {/* Centered container for Navbar + Outlet + Footer */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
