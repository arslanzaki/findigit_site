import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="w-full lg:w-1/4 mb-4 lg:mb-8">
      <div className="border border-3 border-black rounded-xl p-8 h-96">
        <h1 className="font-bold text-[#00103A] text-xl lg:text-3xl">
          {service.title}
        </h1>
        <p className="text-[#00103A] opacity-50 text-lg lg:text-xl my-4 lg:my-6">
          {service.description}
        </p>
        <Link href="/" className="text-lg lg:text-2xl text-customBlue">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
