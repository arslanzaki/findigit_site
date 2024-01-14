import { testimonialsList } from "@/constants/testimonialsList";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="text-center bg-[#f5f5f5] text-black text py-16" id="testimonials">
      <h1 className="text-[#00103A] text-4xl lg:text-6xl font-bold mb-6">
        Testimonials
      </h1>
      <div className="carousel carousel-center mx-auto p-4 space-x-2 w-full">
        {testimonialsList.map((testimonial, index) => (
          <TestimonialsCard testimonial={testimonial} key={index} />
        ))}
        {/* <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
