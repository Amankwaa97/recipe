import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#558db5] text-black py-8 px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Cook Ease</h3>
          <p className="text-white text-lg">Discover delicious recipes with ease.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
          <div>
            <h4 className="text-md font-bold mb-2">Quick Links</h4>
            <ul className="text-white text-sm space-y-2">
              <li><a href="/" className="hover:text-black">Home</a></li>
              
              <li><a href="/about" className="hover:text-black">About</a></li>
              <li><a href="/contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-bold mb-2">Social Media</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="/" className="text-blue-600 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="/Twitter" className="text-blue-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="/Insta" className="text-red-300 hover:text-white">
                <FaInstagram />
              </a>
              <a href="/Pinterest" className="text-red-500 hover:text-white">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4">
        <p className="text-white text-sm text-center">
          &copy; {new Date().getFullYear()} Cook Ease. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;