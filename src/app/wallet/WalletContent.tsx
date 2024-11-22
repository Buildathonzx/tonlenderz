
'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

const TonConnect = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectButton),
  { ssr: false }
)

export default function WalletContent() {
  return (
    <Box className="flex justify-center items-center min-h-screen">
      <TonConnect />
    </Box>
  )
}