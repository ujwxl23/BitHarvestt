import React from 'react';
import Link from 'next/link'; // For dynamic routing

const Card = ({ modelName, description, viewDataUrl}) => {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="card-title text-xl font-medium text-gray-800 p-4">
        {modelName}
      </h3>
      <p className="card-description text-gray-600 p-4">
        {description}
      </p>

      <div className="card-actions flex justify-between items-center px-4 py-2">
        <Link href={viewDataUrl}>
          <button className="button bg-blue-500 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700">
            View Data
          </button>
        </Link>
        <Link href={`/market/${modelName}`}>
          <button className="button border border-blue-500 text-blue-500 font-medium py-2 px-4 rounded-full hover:bg-blue-100">
            Share Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
