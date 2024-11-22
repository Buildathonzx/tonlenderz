
import Image from 'next/image';
import { Box } from '@mui/material';

const BackgroundLogo = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.1,
      }}
      className="flex items-center justify-center"
    >
      <Image
        className="dark:invert animate-bounce"
        src="/images/tonlenderz.jpeg"
        alt="Background logo"
        width={300}
        height={300}
        priority
      />
    </Box>
  );
};

export default BackgroundLogo;