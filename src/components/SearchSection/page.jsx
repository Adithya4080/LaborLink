"use client"
import React, { useState } from 'react';

const SearchSection = ({ categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    // Handle search functionality
    console.log('Search:', { selectedCategory, selectedLocation, budget });
  };

  return (
    <section className="relative -mt-16 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/10 border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            What type of worker do you need?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative group">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 appearance-none text-gray-900 font-medium"
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
              </div>
            </div>
            
            <div className="relative">
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 appearance-none text-gray-900 font-medium"
              >
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Budget range"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 font-medium"
              />
            </div>
            
            <button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
            >
              <span>🔍</span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;