import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 md:pr-4">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">
            At EduPath, our primary goal is to empower individuals and organizations by unlocking the full potential of artificial intelligence. We aim to create innovative solutions that solve real-world problems, enhance efficiency, and foster sustainable growth.
          </p>
          <p>
            We believe in the transformative power of AI and are committed to making it accessible to everyone, enabling users to leverage advanced technology to drive change and achieve their objectives.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">
            We're here to help you choose your Best educational path. If you need further information, please don't hesitate to reach out to us.
          </p>
          <ul className="space-y-2">
            <li><strong>Email:</strong> <a href="mailto:info@edupath.dz" className="text-blue-500 hover:text-blue-600">info@edupath.edu.dz</a></li>
            <li><strong>Phone:</strong> <a href="tel:+2134567890" className="text-blue-500 hover:text-blue-600">+2 (213) 567-890</a></li>
            <li><strong>Address:</strong> Alger، Sidi Abdellah</li>
          </ul>
          <p className="mt-4">
            Follow us on our social media channels to stay updated with the latest news and developments.
          </p>
          <div className="flex space-x-4 mt-4">
  <a href="https://twitter.com" className="text-blue-500 hover:text-blue-600">
    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
  </a>
  <a href="https://facebook.com" className="text-blue-500 hover:text-blue-600">
    <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
  </a>
  <a href="https://linkedin.com/company" className="text-blue-500 hover:text-blue-600">
    <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
