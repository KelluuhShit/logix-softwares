import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-green-400 p-5 font-sen">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">
            <img src={logo} alt="Logix Softwares Logo" className="h-10 md:h-12 w-auto" />
          </a>
        </div>
        
        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <i className="fas fa-xmark text-2xl"></i> // Close icon when menu is open
            ) : (
              <i className="fas fa-bars-staggered text-2xl"></i> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${isMenuOpen ? 'absolute bg-gray-800 w-full z-50 top-16 left-0 shadow-lg rounded-lg transition-all duration-300 ease-in-out' : 'hidden md:flex md:static md:bg-transparent'}`}>
          <li className="hover:bg-gray-700 transition duration-300 rounded-lg">
            <a href="#home" className="block py-2 px-4 hover:text-green-600">Home</a>
          </li>
          <li className="hover:bg-gray-700 transition duration-300 rounded-lg">
            <a href="#services" className="block py-2 px-4 hover:text-green-600">Services</a>
          </li>
          <li className="hover:bg-gray-700 transition duration-300 rounded-lg">
            <a href="#about" className="block py-2 px-4 hover:text-green-600">About</a>
          </li>
          <li className="hover:bg-gray-700 transition duration-300 rounded-lg">
            <a href="#contact" className="block py-2 px-4 hover:text-green-600">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
