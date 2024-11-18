import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary-500 hover:text-primary-700 transition-colors duration-300">TonLenderz</a>
        </Link>
        <div className="space-x-4">
          <Link href="/wallet">
            <a className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Wallet</a>
          </Link>
          <Link href="/lending">
            <a className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Lending</a>
          </Link>
          <Link href="/settings">
            <a className="text-gray-700 hover:text-primary-500 transition-colors duration-300">Settings</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
