import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-400">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;