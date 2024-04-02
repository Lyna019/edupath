// src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white  p-4">
          <div className="container mx-auto text-center">
            Empower Your Academic Journey © {new Date().getFullYear()}
          </div>
        </footer>
  );
};

export default Footer;
