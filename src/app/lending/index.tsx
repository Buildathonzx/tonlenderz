import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'next-themes';
import ConnectWalletOverlay from '../../components/ConnectWalletOverlay';

const Lending = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar onConnectWallet={() => setShowOverlay(true)} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-2xl font-bold text-primary-500 dark:text-primary-300">Lending Dashboard</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Manage your digital assets here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Add lending components here */}
            <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold">Asset 1</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Details about asset 1.</p>
            </div>
            <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold">Asset 2</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Details about asset 2.</p>
            </div>
            <div className="card bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
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
