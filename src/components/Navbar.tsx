import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

interface NavbarProps {
  onConnectWallet: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component="a" href="#about">About</MenuItem>
          <MenuItem onClick={handleClose} component="a" href="#faq">FAQ</MenuItem>
          <MenuItem onClick={handleClose} component="a" href="#transparency">Transparency</MenuItem>
        </Menu>
        <Typography variant="h6" className="flex-grow">
          Home
        </Typography>
        <Button color="inherit" href="/lending">Lending</Button>
        <Button color="inherit" href="/settings">Settings</Button>
        <Button color="inherit" href="/wallet">Wallet</Button>
        <Button color="inherit" onClick={onConnectWallet}>Connect Wallet</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
