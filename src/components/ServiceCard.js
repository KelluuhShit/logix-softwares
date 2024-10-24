import React from 'react';

const ServiceCard = ({ title, price, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-lg font-bold text-green-400 mb-2">{price}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
