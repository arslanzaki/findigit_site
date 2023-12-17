"use client";

import React, { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Auto-play was prevented
        // You can handle this case here
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);
  return (
    // <div className="h-screen flex items-center justify-center">

    // </div>
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
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-7xl lg:text-8xl">
            Where{" "}
            <span className="font-bold text-3xl md:text-8xl lg:text-9xl text-[#F8BA18]">
              ideas
            </span>{" "}
            transform into
          </h1>
          <h1 className="text-2xl md:text-7xl lg:text-8xl">
            digital{" "}
            <span className="font-bold text-3xl md:text-8xl lg:text-9xl text-[#F8BA18]">
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
