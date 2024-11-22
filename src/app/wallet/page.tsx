import ClientWallet from '@/app/wallet/ClientWallet';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/components/theme';

export default function WalletPage() {
  const { theme: currentTheme } = useNextTheme();

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <ClientWallet />
    </ThemeProvider>
  );
}
