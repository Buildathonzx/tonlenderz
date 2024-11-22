import { useState, useEffect } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { walletService } from '@/utils/contracts';

interface Asset {
  name: string;
  balance: string;
  symbol: string;
  value: number;
}

export const useWallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const connected = tonConnectUI.connected;
  const account = tonConnectUI.account;
  const [balance, setBalance] = useState('0');
  const [assets, setAssets] = useState<Asset[]>([]); // properly typed assets state

  useEffect(() => {
    if (connected && account) {
      walletService.connect(account.address)
        .then(() => walletService.getBalance())
        .then(setBalance);
      
      // Example of setting mock assets data
      setAssets([
        { name: 'TON', balance: '100', symbol: 'TON', value: 200.50 },
        { name: 'TonLenderz Token', balance: '500', symbol: 'TLZ', value: 150.75 }
      ]);
    }
  }, [connected, account]);

  return {
    address: account?.address,
    balance,
    assets
  };
};
