import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

interface ConnectWalletOverlayProps {
  onWalletConnected: () => void;
}

const ConnectWalletOverlay: React.FC<ConnectWalletOverlayProps> = ({ onWalletConnected }) => {
  return (
    <Modal open={true} onClose={onWalletConnected}>
      <Box className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <Box className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <Typography variant="h4" className="mb-4">Connect Your Wallet</Typography>
          <Button variant="contained" color="primary" onClick={onWalletConnected}>Connect Wallet</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConnectWalletOverlay;