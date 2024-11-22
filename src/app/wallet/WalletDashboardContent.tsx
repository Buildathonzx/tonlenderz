'use client';

import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Button, Grid, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWallet } from '@/hooks/useWallet';


const TonConnectButton = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectButton),
  { ssr: false }
);

interface Asset {
  name: string;
  balance: string;
  symbol: string;
  value: number;
}

const WalletDashboardContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [tonConnect, setTonConnect] = useState<any>(null);
  const { address, balance, assets } = useWallet();

  useEffect(() => {
    let ui: any;
    const init = async () => {
      const TonUI = await import('@tonconnect/ui-react');
      ui = new TonUI.TonConnectUI();
      setTonConnect(ui);
      setConnected(ui.connected);
    };
    init();
    return () => {
      if (ui) ui.disconnect();
    };
  }, []);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (!connected) {
    return (
      <Box className="flex flex-col min-h-screen">
        <Navbar onConnectWallet={() => {}} />
        <Box className="flex-grow flex items-center justify-center">
          <Card className="p-8 text-center">
            <Typography variant="h5" className="mb-4">Connect your wallet to continue</Typography>
            <TonConnectButton />
          </Card>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <Navbar onConnectWallet={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Box className="container mx-auto px-4 py-8 flex-grow">
        {isLoading ? (
          <Box className="flex justify-center items-center h-full">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="p-6 bg-white/10 backdrop-blur-lg">
                <Typography variant="h6" className="text-gray-400">Wallet Address</Typography>
                <Typography className="text-xl mt-2">{address}</Typography>
                <Typography variant="h4" className="mt-4">{balance} TON</Typography>
                <Button variant="contained" className="mt-4">Send TON</Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="p-6 bg-white/10 backdrop-blur-lg">
                <Typography variant="h6" className="text-gray-400">Recent Activity</Typography>
                {/* Add transaction history component here */}
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className="p-6 bg-white/10 backdrop-blur-lg">
                <Typography variant="h6" className="text-gray-400">Assets Portfolio</Typography>
                <Grid container spacing={2} className="mt-4">
                  {assets.map((asset: Asset, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className="p-4">
                        <Typography>{asset.name}</Typography>
                        <Typography variant="h6">{asset.balance} {asset.symbol}</Typography>
                        <Typography className="text-gray-400">${asset.value}</Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default WalletDashboardContent;