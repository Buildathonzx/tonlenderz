import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-8 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700">&copy; 2024 TonLenderz. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
