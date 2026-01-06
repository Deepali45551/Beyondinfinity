import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-18">
      {/* Header Section */}
      <div className="w-full text-center mb-10">
        <h1 className="text-4xl font-bold">My account</h1>
        <p className="mt-2 text-gray-400">
           BeyondInfinities <span className="text-white">› My Account</span>
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-black border border-gray-700 p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-2"
          >
            Username or email address <span className="text-white">*</span>
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2"
          >
            Password <span className="text-white">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Remember me */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 accent-red-500"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition">
          Log in
        </button>

        {/* Lost Password */}
        <div className="mt-4 text-sm">
          <a href="#" className="text-white hover:underline">
            Lost your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
