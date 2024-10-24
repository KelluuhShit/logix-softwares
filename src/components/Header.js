import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-green-400 p-4 font-sen">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Logix Softwares</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-green-600">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-600">Services</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
