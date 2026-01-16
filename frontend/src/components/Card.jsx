import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-72">
        <div className="relative overflow-hidden h-80">
          <div className="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <button className="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">
            NEW
          </span>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Premium Smart Watch
              </h3>
              <p className="text-gray-500 text-sm">
                Fitness Tracker, Heart Rate Monitor
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
