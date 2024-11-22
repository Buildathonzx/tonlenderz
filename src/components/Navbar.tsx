import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onConnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
  const [, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();



  const isHomePage = pathname === '/';

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        margin: '1rem',
        borderRadius: '1rem',
        width: 'calc(100% - 2rem)',
      }}
    >
      <Toolbar className="flex justify-between items-center">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography 
          variant="h6" 
          className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          sx={{ flexGrow: { xs: 1, sm: 0 } }}
        >
          TonLenderz
        </Typography>

        <Box sx={{ 
          display: { xs: mobileMenuOpen ? 'flex' : 'none', sm: 'flex' },
          position: { xs: 'absolute', sm: 'static' },
          top: { xs: '100%', sm: 'auto' },
          left: { xs: 0, sm: 'auto' },
          right: { xs: 0, sm: 'auto' },
          bgcolor: { xs: 'rgba(31, 38, 135, 0.95)', sm: 'transparent' },
          color: { xs: 'white', sm: 'inherit' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          p: { xs: 2, sm: 0 },
          borderRadius: { xs: '0 0 1rem 1rem', sm: 0 },
          backdropFilter: 'blur(10px)',
          border: { xs: '1px solid rgba(255, 255, 255, 0.18)', sm: 'none' },
          zIndex: 1000,
          '& .MuiButton-root': {
            width: { xs: '100%', sm: 'auto' },
            color: { xs: 'white', sm: 'inherit' },
            '&:hover': {
              bgcolor: { xs: 'rgba(255, 255, 255, 0.1)', sm: 'transparent' },
            }
          }
        }}>
          <Button color="inherit" href="/" className="rounded-full">Home</Button>
          <Button color="inherit" href="/lending" className="rounded-full">Lending</Button>
          <Button color="inherit" href="/settings" className="rounded-full">Settings</Button>
          <Button color="inherit" href="/wallet" className="rounded-full">Wallet</Button>
          {isHomePage && (
            <>
              <Button color="inherit" href="#about" className="rounded-full">About</Button>
              <Button color="inherit" href="#faq" className="rounded-full">FAQ</Button>
              <Button color="inherit" href="#transparency" className="rounded-full">Transparency</Button>
            </>
          )}
        </Box>

        <Button 
          color="inherit" 
          onClick={onConnectWallet}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ml-4"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Connect Wallet
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
