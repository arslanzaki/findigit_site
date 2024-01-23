import { Instagram, Facebook, MessageCircleCode, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#00103A]">
      <footer className="footer p-10 text-base-content">
        <aside>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="findigit_logo"
              width={170}
              height={60}
              className="max-w-full w-32 lg:w-40"
            />
          </Link>
        </aside>
        <nav>
          <header className="footer-title lg:text-lg">Home</header>
          <a className="link link-hover">Introduction</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contacts Us</a>
        </nav>
        <nav>
          <header className="footer-title lg:text-lg">Services</header>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Mobile Apps</a>
          <a className="link link-hover">Software Development</a>
          <a className="link link-hover">E-commerce</a>
          <a className="link link-hover">Cybersecurity</a>
        </nav>
        <nav>
          <header className="footer-title lg:text-lg">About</header>
          <a className="link link-hover">Who we are</a>
          <a className="link link-hover">Our team</a>
          <a className="link link-hover">Case Studies</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-10 text-base-content">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com/">
              <Facebook size={24} color="#80879C" />
            </Link>
            <Link href="https://www.whatsapp.com/">
              <MessageCircleCode size={24} color="#80879C" />
            </Link>
            <Link href="https://www.facebook.com/">
              <Instagram size={24} color="#80879C" />
            </Link>
            <Link href="https://www.facebook.com/">
              <Linkedin size={24} color="#80879C" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>Findigit All Rights Reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
