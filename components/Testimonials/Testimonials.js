'use client';
import React from 'react';

import { testimonialsList } from '../../constants';

import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Testimonials = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-8 bg-white">
      <h2 className="text-4xl text-center text-gray-900 sm:text-5xl">
        Testimonials
      </h2>

      <Slider {...settings} className="mr-4">
        {testimonialsList.map((testimonial, index) => {
          return (
            <div
              class="mx-2 bg-white border border-gray-200 shadow-sm rounded-xl"
              key={index}
            >
              <Image
                src={testimonial.rating}
                alt={index}
                width={170}
                height={60}
                className="max-w-full w-32 lg:w-40 p-4 md:p-6"
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
          );
        })}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 rtl:rotate-180"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  ); // Replace with your arrow icon or content
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white"
    >
      <svg
        className="h-5 w-5 rtl:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5l7 7-7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  ); // Replace with your arrow icon or content
};

export default Testimonials;
