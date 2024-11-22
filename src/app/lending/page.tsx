'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { MonetizationOn } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/components/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedPaper = motion(Paper as any);

const Lending = () => {
  const { theme: currentTheme } = useNextTheme();
  const [, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <Box sx={{ 
        minHeight: '100vh',
        background: currentTheme === 'dark' 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(0, 31, 10, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(232, 245, 233, 0.95) 0%, rgba(255, 243, 224, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: currentTheme === 'dark' ? '#ffffff' : '#1a1a1a'
      }}>
        <Navbar onConnectWallet={() => setShowOverlay(true)} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <Container maxWidth="xl" sx={{ pt: 12 }}>
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" 
              sx={{ 
                textAlign: 'center',
                mb: 6,
                background: currentTheme === 'dark'
                  ? 'linear-gradient(45deg, #00C853, #FF9100)'
                  : 'linear-gradient(45deg, #2E7D32, #ED6C02)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}
            >
              Lending Dashboard
            </Typography>
          </motion.div>

          {/* Stats Cards */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              { 
                title: 'Total Lending',
                value: '$10,000',
                icon: <MonetizationOn sx={{ fontSize: 40 }}/>,
                color: '#00C853'
              },
              // ...Add more stat objects...
            ].map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedPaper
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    background: currentTheme === 'dark'
                      ? 'rgba(28, 28, 28, 0.7)'
                      : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${
                      currentTheme === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                    transform: 'perspective(1000px) rotateX(5deg)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
                      boxShadow: currentTheme === 'dark'
                        ? '0 10px 40px rgba(0, 0, 0, 0.5)'
                        : '0 10px 40px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  {/* Stat content */}
                </AnimatedPaper>
              </Grid>
            ))}
          </Grid>

          {/* Marketplace Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
              Lending Marketplace
            </Typography>
            <Grid container spacing={4}>
              {/* Add marketplace items here with 3D cards */}
            </Grid>
          </Box>

          {/* Activity Feed */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
              Recent Activity
            </Typography>
            {/* Add activity feed with animations */}
          </Box>

        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Lending;
