import React from "react";
import ServicesList from "./servicesList.json";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 lg:py-24 px-4" id="services">
      <div className="text-center py-12">
        <h1 className="text-[#00103A] text-4xl lg:text-6xl font-bold pb-8">What We Do</h1>
        <p className="text-[#00103A] opacity-60 text-xl lg:text-2xl font-medium lg:w-1/2 mx-auto">
          FinDigit for expertise that exceeds industry standards, innovative
          solutions from AI to blockchain, and tailored, swiftly deployed
          projects. Our user-centric design ensures visually stunning and
          intuitively engaging interfaces, creating a transformative digital
          experience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {ServicesList.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-customBlue text-white rounded-lg lg:px-12 px-8 lg:py-4 py-3">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
