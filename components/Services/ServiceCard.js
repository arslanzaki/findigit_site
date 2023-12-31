import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="w-full lg:w-1/4 mb-4 mx-2 lg:mb-8">
      <div className="border border-3 border-black rounded-xl p-6 lg:p-8 h-full">
        <h1 className="font-bold text-[#00103A] text-xl lg:text-3xl">
          {service.title}
        </h1>
        <p className="text-[#00103A] opacity-50 text-lg lg:text-xl my-4 lg:my-6 lg:h-56">
          {service.description}
        </p>
        <Link
          href="/"
          className="text-lg lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
