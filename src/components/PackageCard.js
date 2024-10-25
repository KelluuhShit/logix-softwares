import React, { useState } from 'react';
import '../App.css';

const PackageCard = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler functions for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + items.length) % items.length
    );
  };

  const currentItem = items[currentIndex];

  return (
    <div className="max-w-sm mx-auto space-y-8 rounded-lg">
      <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="text-green-400 hover:text-green-600"
        >
          <i className="fa-solid fa-chevron-left fa-lg text-2xl p-2"></i> {/* Increased icon size */}
        </button>
        <div className="text-center rounded-lg p-4 flex flex-col justify-between items-center min-h-70 w-full shadow-green-lg">
          <h3 className="text-lg font-semibold text-green-400 mb-2">
            {currentItem.name}
          </h3>
          <p className="text-green-600 font-medium mb-1">{currentItem.price}</p>
          <p className="text-gray-500">{currentItem.description}</p>
        </div>
        <button
          onClick={handleNext}
          className="text-green-400 hover:text-green-600"
        >
          <i className="fa-solid fa-chevron-right fa-lg text-2xl p-2"></i> {/* Increased icon size */}
        </button>
      </div>
      
      {/* Show active service with navigation bars */}
      <div className="flex justify-center space-x-2 mb-4">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-1/3 rounded-lg transition-colors duration-300 ${currentIndex === index ? 'bg-green-400' : 'bg-gray-600'}`}
          ></div>
        ))}
      </div>

      {/* Enquiry Button */}
      <button className=" w-full mt-4 bg-green-400 text-black font-semibold rounded-md py-2 px-4 hover:bg-green-500 transition">
        Enquire
      </button>
    </div>
  );
};

export default PackageCard;
