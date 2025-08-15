import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/video-poster.jpg"
      >
        <source src="/video/background-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-oritech-black via-gray-900 to-oritech-black"></div>
      </video>
      
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default VideoBackground;