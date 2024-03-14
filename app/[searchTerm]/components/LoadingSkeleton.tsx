import React from 'react';

function LoadingSkeleton() {
  return (
    <div className="rounded-lg p-4 border border-gray-300 animate-pulse">
      <div className="flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-4/5"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded w-3/6"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;