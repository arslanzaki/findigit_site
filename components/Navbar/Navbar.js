import { Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar lg:p-8 p-4 absolute">
      <div className="lg:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-8 shadow text-[#00103A] bg-[#F8BA18] rounded-box w-52 space-y-6"
          >
            <Link href="/">Home</Link>

            <Link href="#services">Services</Link>

            <Link href="#testimonials">Testimonials</Link>

            <Link href="/about">About</Link>
          </div>
        </div>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="findigit_logo"
            width={170}
            height={60}
            className="max-w-full w-32 lg:w-40"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex space-x-12 text-white font-medium text-xl">
        <Link href="/">Home</Link>

        <Link href="#services">Services</Link>

        <Link href="#testimonials">Testimonials</Link>

        <Link href="/about">About</Link>
      </div>
      <div className="lg:text-xl text-lg text-white navbar-end">
        <Globe size={24} color="#fff" className="mr-4" />
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg lg:px-8 px-4 lg:py-3 py-2">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
