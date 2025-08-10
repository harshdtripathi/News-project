import React from 'react';

const VideoDescription = ({ url, title, description }) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden bg-white p-2 shadow hover:shadow-lg hover:cursor-pointer transition-transform transform hover:scale-105">
      <div className='p-1.5'>
        <img
          src={url}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-48 object-cover"
        />
      </div>
      <div className="p-2">
        <span className="block text-sm sm:text-base font-semibold text-blue-800 line-clamp-2">
          {title}
        </span>
        {description && (
          <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoDescription;
