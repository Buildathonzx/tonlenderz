import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';

const Settings = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  return (
    <div>
      <Navbar onConnectWallet={() => setShowOverlay(true)} />
      {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-primary-500">Settings</h1>
        <p className="mt-4 text-gray-700">Adjust your preferences here.</p>
        {/* Add settings components here */}
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
