import Image from "next/image";
import React from "react";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="carousel-item w-full lg:w-1/3">
      <div className="lg:w-full mb-4 mx-2 lg:mb-8">
        <div className="border border-3 border-black rounded-xl p-6 lg:p-8 h-full">
          <Image
            src={testimonial.rating}
            alt="ratings"
            width={170}
            height={60}
            className="max-w-full w-32 lg:w-40 p-4 md:p-6 mx-auto"
          />
          <div class="flex-auto p-4 md:p-6">
            <p class="mt-3 sm:mt-6 text-base text-gray-500 md:text-xl">
              {testimonial.review}
            </p>
          </div>

          <div class="p-4 rounded-b-xl md:px-6">
            <h3 class="text-sm font-semibold text-gray-800 sm:text-base ">
              {testimonial.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
