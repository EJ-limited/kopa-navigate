"use client"; 
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NYSC Navigator</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="/state_display/#about" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center p-2 border-2 border-white rounded-md"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="/state_display/#about" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
