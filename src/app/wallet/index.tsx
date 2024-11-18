import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Wallet = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-primary-500">Wallet</h1>
        <p className="mt-4 text-gray-700">Manage your digital assets here.</p>
        {/* Add wallet management components here */}
      </main>
      <Footer />
    </div>
  );
};

export default Wallet;
