import React from 'react';
import heroImage from '../assets/background.jpg'; // Adjust the path as needed

const HeroSection = () => {
  return (
    <div className="bg-blue-100 text-navy-blue p-12 flex items-center justify-center md:justify-between flex-wrap-reverse">
      <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
        <h1 className="text-4xl font-bold mb-4">Empower Your Academic Journey</h1>
        <p className="mb-8">Join our community and make informed decisions about your future.</p>
        <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-2 rounded transition-all duration-300 ease-in-out border-2 border-white">
          Start Your Journey
        </button>
      </div>
      <div className="text-center md:text-right max-w-md mx-auto md:md-0">
        <img src={heroImage} alt="Empower Your Academic Journey" className="w-full h-auto rounded-full shadow-xl hover:shadow-inner transition-shadow duration-300 ease-in-out"
/>
      </div>
    </div>
  );
};

export default HeroSection;
