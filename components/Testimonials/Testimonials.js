import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden z-[-1]">
      <Image
        src="/images/business.png"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 object-cover w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Your content */}
        <div className="text-center text-white">
          <h1 className="font-bold text-6xl">
            Ready To Elevate Your Digital Presence?
          </h1>
          <p className="opacity-70 text-2xl w-1/2 mx-auto my-8">
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

export default Testimonials;
