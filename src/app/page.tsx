'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';
import { Container, Box, Typography, Card, CardContent, CardHeader, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.18)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 45px 0 rgba(31, 38, 135, 0.5)',
  },
}));

export default function Home() {
  const [, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleConnectWallet = () => {
    setShowOverlay(true);
  };

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Box className="relative min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-purple-700 via-pink-700 to-blue-700 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900">
        <Navbar onConnectWallet={handleConnectWallet} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <Container className="animate-fadeIn">
          <Box className="flex flex-col items-center gap-8">
            <Image
              className="dark:invert animate-bounce"
              src="/images/tonlenderz.jpeg"
              alt="Custom logo"
              width={180}
              height={38}
              priority
            />
            <Box className="flex flex-wrap justify-center items-center gap-8">
              <StyledCard data-aos="zoom-in-up" data-aos-delay="100">
                <CardHeader title="Assets Diversification" className="text-2xl font-bold" />
                <CardContent className="flex justify-center items-center mt-4">
                  <Box className="bg-gray-700 dark:bg-gray-900 rounded-full w-40 h-10 flex justify-center items-center">
                    <Typography className="text-gray-500">**********</Typography>
                  </Box>
                </CardContent>
                <Box className="flex justify-between items-center mt-4">
                  <Typography>Blockchain Investment</Typography>
                  <Button variant="contained" className="bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">BTC $260K</Button>
                </Box>
              </StyledCard>
              <StyledCard data-aos="zoom-in-up" data-aos-delay="200">
                <CardHeader title="DeFi" className="text-2xl font-bold" />
                <CardContent className="flex justify-center items-center mt-4">
                  <Typography>For Digital Currency</Typography>
                </CardContent>
              </StyledCard>
              <StyledCard data-aos="zoom-in-up" data-aos-delay="300">
                <CardHeader title="Safe Portfolio Matrix" className="text-2xl font-bold" />
                <CardContent className="flex justify-center items-center mt-4">
                  <Box className="bg-gray-700 dark:bg-gray-900 rounded-full w-40 h-10 flex justify-center items-center">
                    <Typography className="text-gray-500">**********</Typography>
                  </Box>
                </CardContent>
                <Box className="flex justify-between items-center mt-4">
                  <Typography>Wallet address</Typography>
                  <Button variant="contained" className="bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">0x4167...a3q72</Button>
                </Box>
              </StyledCard>
              <StyledCard data-aos="zoom-in-up" data-aos-delay="400">
                <CardHeader title="What People Say" className="text-2xl font-bold" />
                <CardContent className="flex justify-between items-center mt-4">
                  <Box>
                    <Typography>Sold to over 75m</Typography>
                    <Box className="flex items-center mt-2">
                      <i className="fab fa-bitcoin text-green-500"></i>
                      <Typography className="ml-2">Marian McDaniel</Typography>
                    </Box>
                  </Box>
                  <Button variant="contained" className="bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">$90K</Button>
                </CardContent>
              </StyledCard>
              <StyledCard data-aos="zoom-in-up" data-aos-delay="500">
                <CardHeader title="Wow Allocation Blockchain" className="text-2xl font-bold" />
                <CardContent className="flex justify-between items-center mt-4">
                  <Typography>Token Tracker 24h +7d</Typography>
                  <Box className="flex items-center">
                    <Button variant="contained" className="bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer mr-2">Ton</Button>
                    <Button variant="contained" className="bg-white dark:bg-gray-800 bg-opacity-20 rounded-lg px-4 py-2 cursor-pointer">Wallet</Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Box>
            <StyledCard id="about" data-aos="zoom-in-up" data-aos-delay="600">
              <CardHeader title="About" className="text-2xl font-bold" />
              <CardContent className="flex justify-center items-center mt-4">
                <Typography>Information about the company.</Typography>
              </CardContent>
            </StyledCard>
            <StyledCard id="faq" data-aos="zoom-in-up" data-aos-delay="700">
              <CardHeader title="FAQ" className="text-2xl font-bold" />
              <CardContent className="flex justify-center items-center mt-4">
                <Typography>Frequently Asked Questions.</Typography>
              </CardContent>
            </StyledCard>
            <StyledCard id="transparency" data-aos="zoom-in-up" data-aos-delay="800">
              <CardHeader title="Transparency" className="text-2xl font-bold" />
              <CardContent className="flex justify-center items-center mt-4">
                <Typography>Transparency details.</Typography>
              </CardContent>
            </StyledCard>
          </Box>
        </Container>
        <Box className="flex gap-6 flex-wrap items-center justify-center mt-8">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Buildathonzx/tonlenderz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to documentation →
          </a>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
