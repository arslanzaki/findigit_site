import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-16 absolute w-screen">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="findigit_logo"
              width={200}
              height={60}
              className="max-w-full"
            />
          </Link>
        </div>
        <div className="space-x-24 text-xl text-white font-thin">
          <Link href="/">Home</Link>

          <Link href="/">Services</Link>

          <Link href="/">Testimonials</Link>

          <Link href="/">About</Link>
        </div>
        <div className="text-xl text-white">
          <button className="bg-customBlue rounded-lg px-8 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
