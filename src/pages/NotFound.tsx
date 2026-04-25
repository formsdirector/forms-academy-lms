import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100-64px)] flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl font-bold text-gray-900 font-playfair mb-4">404</h1>
      <p className="text-lg text-gray-500 font-montserrat mb-8">Page not found</p>
      <Link to="/" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-montserrat uppercase tracking-widest text-xs font-bold">Return Home</Link>
    </div>
  );
};

export default NotFound;
