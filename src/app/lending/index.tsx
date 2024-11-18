import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Lending = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-primary-500">Lending</h1>
        <p className="mt-4 text-gray-700">Lend your digital assets here.</p>
        {/* Add lending components here */}
      </main>
      <Footer />
    </div>
  );
};

export default Lending;
