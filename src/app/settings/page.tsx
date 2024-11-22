'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/components/theme';

const Settings = () => {
  const { theme: currentTheme } = useNextTheme();
  const [, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <div>
        <Navbar onConnectWallet={() => setShowOverlay(true)} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-primary-500">Settings</h1>
          <p className="mt-4 text-gray-700">Adjust your preferences here.</p>
          {/* Add settings components here */}
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
};

export default Settings;
