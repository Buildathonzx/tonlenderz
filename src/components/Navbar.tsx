import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleConnect = (wallet: string) => {
    alert(`Connect ${wallet}`);
    router.push('/lending');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary-500 dark:text-primary-300 hover:text-primary-700 transition-colors duration-300">TonLenderz</a>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/wallet">
            <a className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Wallet</a>
          </Link>
          <Link href="/lending">
            <a className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Lending</a>
          </Link>
          <Link href="/settings">
            <a className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300">Settings</a>
          </Link>
          <button className="button bg-primary-500 text-white rounded-lg px-4 py-2" onClick={() => handleConnect('GitHub')}>Connect GitHub</button>
          <button className="button bg-primary-500 text-white rounded-lg px-4 py-2" onClick={() => handleConnect('MetaMask')}>Connect MetaMask</button>
          <button className="button bg-primary-500 text-white rounded-lg px-4 py-2" onClick={() => handleConnect('Trust Wallet')}>Connect Trust Wallet</button>
          <button className="button bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
