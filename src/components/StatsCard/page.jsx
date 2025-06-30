import React from 'react';

const StatCard = ({ value, label, gradient }) => {
  return (
    <div className="group cursor-pointer">
      <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
        {value}
      </div>
      <div className="text-white/80 font-medium">{label}</div>
    </div>
  );
};

const StatsSection = ({ stats }) => {
  const defaultStats = [
    {
      value: '5000+',
      label: 'Verified Workers',
      gradient: 'from-yellow-300 to-pink-300'
    },
    {
      value: '15K+',
      label: 'Projects Completed',
      gradient: 'from-green-300 to-blue-300'
    },
    {
      value: '4.8★',
      label: 'Average Rating',
      gradient: 'from-purple-300 to-pink-300'
    },
    {
      value: '50+',
      label: 'Cities Covered',
      gradient: 'from-orange-300 to-red-300'
    }
  ];

  const statsData = stats || defaultStats;

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;