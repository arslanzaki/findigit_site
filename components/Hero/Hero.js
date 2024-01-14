'use client';

import React, { useEffect, useRef } from 'react';
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Auto-play was prevented:', error);
      });
    }
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="testvideo.mp4" type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Your content */}
        <div className="text-center text-white px-3 md:px-6 lg:px-8 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl">
            Where{' '}
            <span className="text-3xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              ideas
            </span>{' '}
            transform into
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-7xl">
            digital{' '}
            <span className="text-3xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
              experiences
            </span>
            .
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
