import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">5000+ verified workers online</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Find Skilled
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Workers Instantly
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with verified professionals for all your project needs. 
            Book instantly, work confidently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>Find Workers</span>
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-sm">→</span>
              </div>
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
              Join as Worker
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;