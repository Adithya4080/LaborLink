import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                LaborLink
              </h1>
              <p className="text-xs text-gray-500">Find • Connect • Work</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              For Workers
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;