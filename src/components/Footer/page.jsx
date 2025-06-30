import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  LaborLink
                </h2>
                <p className="text-xs text-gray-400">Find • Connect • Work</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting skilled workers with opportunities. Building bridges between talent and demand in the modern workforce.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-200">
                <span className="text-sm font-medium">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-200">
                <span className="text-sm font-medium">t</span>
              </div>
              <div className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-200">
                <span className="text-sm font-medium">in</span>
              </div>
            </div>
          </div>

          {/* For Workers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">For Workers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Browse Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Create Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Skill Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Career Resources</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">For Employers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Post Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Find Workers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Employer Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Success Stories</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2025 LaborLink. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Platform Status: Operational</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Settings</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Accessibility</a>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-300 text-xs">Secured Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;