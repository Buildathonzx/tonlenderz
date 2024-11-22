/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectWalletOverlay from '@/components/ConnectWalletOverlay';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/components/theme';
import { Container, Typography, Box, Switch, FormControlLabel, TextField, Button, Avatar } from '@mui/material';

const Settings = () => {
  const { theme: currentTheme } = useNextTheme();
  const [, setIsWalletConnected] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [darkMode, setDarkMode] = useState(currentTheme === 'dark');
  const [profileIcon, setProfileIcon] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleWalletConnected = () => {
    setIsWalletConnected(true);
    setShowOverlay(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle theme
  };

  const handleProfileIconChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setProfileIcon(event.target.value);
  };

  const handleSaveSettings = () => {
    // Add logic to save settings
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <div>
        <Navbar onConnectWallet={() => setShowOverlay(true)} />
        {showOverlay && <ConnectWalletOverlay onWalletConnected={handleWalletConnected} />}
        <main className="container mx-auto px-4 py-8">
          <Typography variant="h2" align="center" gutterBottom>
            Settings
          </Typography>
          <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
                label="Dark Mode"
              />
              <TextField
                label="Profile Icon URL"
                value={profileIcon}
                onChange={handleProfileIconChange}
                fullWidth
              />
              <Avatar src={profileIcon} alt="Profile Icon" sx={{ width: 100, height: 100 }} />
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <Button variant="contained" color="primary" onClick={handleSaveSettings}>
                Save Settings
              </Button>
            </Box>
          </Container>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Settings;
