// src/components/layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'; // Make sure this path points to your logo

const Navbar = () => {
  return (
    <nav className="bg-navy-blue text-navy-blue p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-13 w-12 rounded-full mr-2" /> {/* Adjust size with h-12 w-12 */}
        <Link to="/" className="mx-4 hover:text-blue-900 font-bold">EduPath</Link>
      </Link>
      <div className="flex-grow flex justify-center items-center">
        <Link to="/" className="mx-4 hover:text-blue-900">Home</Link>
        <Link to="/about" className="mx-4 hover:text-blue-900">About Us</Link>
        <Link to="/universities" className="mx-4 hover:text-blue-900">Universities</Link>
        <Link to="/quiz" className="mx-4 hover:text-blue-900">Quiz</Link>
        <Link to="/contact" className="mx-4 hover:text-blue-900">Contact</Link>
      </div>
      <div>
        <button className="bg-white text-navy-blue font-bold py-2 px-4 rounded">Login</button>
        <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-1 px-3 rounded transition-all duration-300 ease-in-out border-1 border-white">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
