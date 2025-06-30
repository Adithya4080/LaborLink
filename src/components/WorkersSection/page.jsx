import React from 'react';
import Image from 'next/image';

const WorkerCard = ({ worker, index, onBook }) => {
  const handleBook = () => {
    if (worker.available && onBook) {
      onBook(worker);
    }
  };

  return (
    <div
      className="group bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl mx-auto relative ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300 overflow-hidden">
          <Image
            src={worker.image}
            alt={worker.name}
            fill
            className="object-cover"
          />
        </div>
        <div className={`absolute -bottom-2 -right-2 w-6 h-6 ${worker.available ? 'bg-green-500' : 'bg-orange-500'} rounded-full border-4 border-white ${worker.available ? 'animate-pulse' : ''}`}></div>
      </div>
      
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{worker.name}</h3>
        <p className="text-gray-600 font-medium mb-3">{worker.category}</p>
        
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">⭐</span>
            ))}
          </div>
          <span className="text-gray-600 font-medium">({worker.reviews})</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {worker.skills.slice(0, 2).map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold text-gray-900">₹{worker.price}</span>
          <span className="text-gray-500 text-sm">/day</span>
        </div>
        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {worker.experience}
        </span>
      </div>
      
      <button 
        onClick={handleBook}
        className={`w-full py-3 rounded-2xl font-bold transition-all duration-300 ${
          worker.available 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!worker.available}
      >
        {worker.available ? 'Book Now' : 'Not Available'}
      </button>
    </div>
  );
};

const WorkersSection = ({ workers = [], onBook, onViewAll }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Rated Workers</h2>
            <p className="text-xl text-gray-600">Handpicked professionals with proven track records</p>
          </div>
          <button 
            onClick={onViewAll}
            className="text-blue-600 hover:text-blue-800 font-bold text-lg flex items-center space-x-2 group"
          >
            <span>View All</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workers.map((worker, index) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              index={index}
              onBook={onBook}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkersSection;