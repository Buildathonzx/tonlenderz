'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Container, Typography, Grid, Paper, Button, useTheme as useMuiTheme } from '@mui/material';
import { motion } from "framer-motion";
import { TrendingUp, AccountBalanceWallet, ShowChart, Timeline } from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/components/theme';

// Define proper types for motion components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedPaper = motion(Paper as any);

export default function Home() {
  const { theme: currentTheme } = useNextTheme();
  const theme = useMuiTheme();
  const [] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cryptoData = [
    { name: 'BTC', price: '$45,230', change: '+5.2%' },
    { name: 'ETH', price: '$3,120', change: '+3.8%' },
    { name: 'TON', price: '$2.15', change: '+12.4%' },
  ];

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
        <Navbar />
        <Box sx={{ pt: 8 }}> {/* Spacing for fixed navbar */}
          <Container maxWidth="xl">
            {/* Hero Section */}
            <Box sx={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{ 
                        fontWeight: 800,
                        background: currentTheme === 'dark'
                          ? 'linear-gradient(45deg, #00C853, #FF9100)'
                          : 'linear-gradient(45deg, #2E7D32, #ED6C02)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Decentralized Lending Platform
                    </Typography>
                  </motion.div>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ 
                      mt: 4,
                      background: 'linear-gradient(45deg, #7928CA, #FF0080)',
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1.2rem',
                      py: 2,
                      px: 4
                    }}
                  >
                    Start Lending
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', height: '400px' }}>
                    {cryptoData.map((crypto, index) => (
                      <AnimatedPaper
                        key={crypto.name}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        elevation={3}
                        sx={{
                          position: 'absolute',
                          top: `${index * 120}px`,
                          right: `${index * 40}px`,
                          p: 3,
                          borderRadius: '16px',
                          backdropFilter: 'blur(10px)',
                          background: currentTheme === 'dark'
                            ? 'rgba(28, 28, 28, 0.7)'
                            : 'rgba(255, 255, 255, 0.7)',
                          border: `1px solid ${
                            currentTheme === 'dark'
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)'
                          }`,
                          boxShadow: currentTheme === 'dark'
                            ? '0 4px 30px rgba(0, 0, 0, 0.5)'
                            : '0 4px 30px rgba(0, 0, 0, 0.1)',
                          minWidth: '200px',
                          color: theme.palette.text.primary,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <Typography variant="h6">{crypto.name}</Typography>
                        <Typography variant="h4">{crypto.price}</Typography>
                        <Typography color="success.main">{crypto.change}</Typography>
                      </AnimatedPaper>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Features Grid */}
            <Grid container spacing={4} sx={{ my: 8 }}>
              {[
                { icon: <TrendingUp />, title: 'Market Analytics' },
                { icon: <AccountBalanceWallet />, title: 'Secure Wallet' },
                { icon: <ShowChart />, title: 'Real-time Charts' },
                { icon: <Timeline />, title: 'Portfolio Tracking' }
              ].map((feature, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <AnimatedPaper
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: '16px',
                      background: currentTheme === 'dark'
                        ? 'rgba(28, 28, 28, 0.7)'
                        : 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${
                        currentTheme === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'
                      }`,
                      boxShadow: currentTheme === 'dark'
                        ? '0 4px 30px rgba(0, 0, 0, 0.5)'
                        : '0 4px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      color: currentTheme === 'dark' ? '#ffffff' : '#1a1a1a',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      '& .MuiTypography-root': {
                        color: 'inherit'
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'inherit'
                      }
                    }}
                  >
                    {feature.icon}
                    <Typography variant="h6" sx={{ mt: 2 }}>{feature.title}</Typography>
                  </AnimatedPaper>
                </Grid>
              ))}
            </Grid>

            {/* Stats Section */}
            <Box sx={{ py: 8 }}>
              <Grid container spacing={4}>
                {[
                  { label: 'Total Value Locked', value: '$1.2B' },
                  { label: 'Active Users', value: '50K+' },
                  { label: 'Daily Transactions', value: '120K' }
                ].map((stat, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
                      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle1">{stat.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* About Section */}
            <Box sx={{ py: 12 }} data-aos="fade-up">
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: theme.palette.text.primary }}>
                About TonLenderz
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{
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
                    color: theme.palette.text.primary,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Typography variant="body1">
                      TonLenderz is a revolutionary decentralized lending platform built on TON blockchain...
                    </Typography>
                  </Box>
                </Grid>
                {/* Add more about content */}
              </Grid>
            </Box>

            {/* FAQ Section */}
            <Box sx={{ py: 12 }} data-aos="fade-up">
              <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: theme.palette.text.primary }}>
                Frequently Asked Questions
              </Typography>
              {[
                { q: "What is TonLenderz?", a: "TonLenderz is a decentralized lending platform..." },
                { q: "How do I get started?", a: "Simply connect your wallet and..." },
                // Add more FAQs
              ].map((faq, index) => (
                <AnimatedPaper
                  key={index}
                  sx={{
                    p: 3,
                    mb: 2,
                    borderRadius: '16px',
                    background: currentTheme === 'dark'
                      ? 'rgba(28, 28, 28, 0.7)'
                      : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${
                      currentTheme === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'
                    }`,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Typography variant="h6">{faq.q}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>{faq.a}</Typography>
                </AnimatedPaper>
              ))}
            </Box>

            {/* Footer */}
            <Box sx={{ 
              py: 6, 
              mt: 8,
              borderTop: '1px solid rgba(255,255,255,0.1)',
              background: currentTheme === 'dark'
                ? 'rgba(28, 28, 28, 0.7)'
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              color: theme.palette.text.primary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2 }}>TonLenderz</Typography>
                  <Typography variant="body2">
                    The future of decentralized lending on TON blockchain.
                  </Typography>
                </Grid>
                {/* Add more footer content */}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
