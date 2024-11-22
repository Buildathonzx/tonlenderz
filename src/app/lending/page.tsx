'use client';


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';

const Lending = () => {
  const [, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
        <Navbar onConnectWallet={() => setShowOverlay(true)} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-aos="fade-down"
          >
            Lending Dashboard
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Manage your digital assets here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div 
              className="card backdrop-blur-lg bg-white/10 dark:bg-gray-800/30 shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <h2 className="text-xl font-bold">Asset 1</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Details about asset 1.</p>
            </div>
            <div 
              className="card backdrop-blur-lg bg-white/10 dark:bg-gray-800/30 shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <h2 className="text-xl font-bold">Asset 2</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Details about asset 2.</p>
            </div>
            <div 
              className="card backdrop-blur-lg bg-white/10 dark:bg-gray-800/30 shadow-xl rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <h2 className="text-xl font-bold">Asset 3</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Details about asset 3.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Lending;
