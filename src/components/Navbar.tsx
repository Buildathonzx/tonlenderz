'use client';

import { AppBar, Box, Button, IconButton, Toolbar, Typography, useTheme as useMuiTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Brightness4, Brightness7, AccountBalanceWallet, Menu } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface NavbarProps {
  onConnectWallet?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
  const { theme, setTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = ['Lending', 'Wallet', 'Settings'];

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

        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)} sx={{ color: muiTheme.palette.text.primary }}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem button component={Link} href={`/${item.toLowerCase()}`} key={item}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
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
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AccountBalanceWallet />}
            onClick={onConnectWallet}
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
