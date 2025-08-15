import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
        poster="/images/video-poster.jpg"
        preload="auto"
        style={{ 
          width: '100vw', 
          height: '100vh',
          objectFit: 'cover'
        }}
      >
        <source src="/Robot Website.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </video>
      
      {/* Fallback background for when video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-oritech-black via-gray-900 to-oritech-black"></div>
      
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-45 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default VideoBackground;