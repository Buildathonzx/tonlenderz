'use client';

import { AppBar, Box, Button, IconButton, Toolbar, Typography, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Brightness4, Brightness7, AccountBalanceWallet } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: theme === 'dark'
          ? 'rgba(28, 28, 28, 0.7)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${
          theme === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'
        }`,
        boxShadow: theme === 'dark'
          ? '0 4px 30px rgba(0, 0, 0, 0.5)'
          : '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" component={Link} href="/" sx={{ 
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #7928CA, #FF0080)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TonLenderz
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Lending', 'Wallet', 'Settings'].map((item) => (
            <Button
              key={item}
              component={Link}
              href={`/${item.toLowerCase()}`}
              sx={{ color: muiTheme.palette.text.primary }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AccountBalanceWallet />}
            sx={{
              background: 'linear-gradient(45deg, #7928CA, #FF0080)',
              borderRadius: '12px'
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
