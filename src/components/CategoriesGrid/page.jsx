"use client"
import React from 'react';

const CategoryCard = ({ category, index, onClick }) => {
  return (
    <div
      onClick={() => onClick(category)}
      className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 font-medium">{category.workers.toLocaleString()} workers</p>
        
        <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
      </div>
    </div>
  );
};

const CategoriesGrid = ({ categories = [], onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p className="text-xl text-gray-600">Discover skilled professionals in every field</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;