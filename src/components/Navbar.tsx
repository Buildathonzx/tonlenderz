import React from 'react';

const Navbar = ({ onConnectWallet }) => {
  return (
    <nav className="flex justify-between items-center space-x-4 bg-black bg-opacity-50 p-4 rounded-full backdrop-blur-md w-full max-w-6xl mx-auto">
      <div className="flex space-x-4">
        <a href="#about" className="menu-item text-white">Home</a>
        <a href="#faq" className="menu-item text-white">FAQ</a>
        <a href="#transparency" className="menu-item text-white">Transparency</a>
      </div>
      <div className="flex space-x-4">
        <a href="/lending" className="menu-item text-white">Lending</a>
        <a href="/settings" className="menu-item text-white">Settings</a>
        <a href="/wallet" className="menu-item text-white">Wallet</a>
        <button onClick={onConnectWallet} className="menu-item text-green-500 bg-gray-800 bg-opacity-50 rounded-full">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
