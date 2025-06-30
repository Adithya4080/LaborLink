import React from 'react';

const CTASection = ({ onStartSearch, onLearnMore }) => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to get your project started?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Join thousands of satisfied customers who found their perfect worker match
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onStartSearch}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Search
          </button>
          <button 
            onClick={onLearnMore}
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
          >
            Learn How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;