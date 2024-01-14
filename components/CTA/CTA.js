import Image from 'next/image';
import React from 'react';

const CTA = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[35vh] lg:h-[60vh]  overflow-hidden z-[-1] ">
      <Image
        src="/images/business.png"
        alt='business'
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center py-16 lg:py-24 px-2">
        <div className="text-center text-white">
          <h1 className="font-bold text-2xl lg:text-6xl">
            Ready To Elevate Your Digital Presence?
          </h1>
          <p className="opacity-70 text-lg lg:text-2xl my-8 lg:text-center lg:px-60 mx-auto py-4">
            Tailored solutions for business growth by expert developers and
            consultants across industries. We focus on enhancing your customer
            journey, optimizing interactions, and delivering unique value.
          </p>
          <button className="px-8 py-3 rounded-lg border-2 border-white text-xl cursor-pointer">
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
