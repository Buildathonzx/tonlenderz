'use client';

import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { TonConnectButton } from '@tonconnect/ui-react';

export default function ClientWallet() {
  return (
    <Suspense fallback={<div>Loading wallet...</div>}>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <TonConnectButton />
      </Box>
    </Suspense>
  );
}