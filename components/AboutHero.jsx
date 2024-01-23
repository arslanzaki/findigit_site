'use client';

import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
const AboutHero = () => {
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
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center gap-y-8">
        {/* Your content */}
        <div className="text-center text-white px-3 md:px-6 lg:px-8 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl">
            <span className=" text-stroke font-bold">About </span>
            <span className="underline font-normal">FinDigit</span>
          </h1>
        </div>
        <div className="lg:text-xl text-lg text-white navbar-end">
          <button className="bg-white px-2 py-2 rounded-full">
            <ChevronDown className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
