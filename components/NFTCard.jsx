import React from 'react';
import Link from 'next/link'; // For dynamic routing

const Card = ({ modelName, description, viewDataUrl, shareDataUrl }) => {
  return (
    <div className="card">
      <h3>{modelName}</h3>
      <p>{description}</p>

      <div className="card-actions">
        <Link href={viewDataUrl}>
          <a className="button">View Data</a>
        </Link>
        <Link href={`/${modelName}/share`}>
          <a className="button">Share Data</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
