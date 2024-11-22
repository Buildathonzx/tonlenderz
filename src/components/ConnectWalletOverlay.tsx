
import React from 'react';

const ConnectWalletOverlay = ({ onWalletConnected }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <button onClick={onWalletConnected} className="bg-green-500 text-white px-4 py-2 rounded-lg">Connect Wallet</button>
      </div>
    </div>
  );
};

export default ConnectWalletOverlay;