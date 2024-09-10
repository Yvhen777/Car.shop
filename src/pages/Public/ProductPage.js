import React from 'react';
import Header from '../../components/Public/Header';
import Footer from '../../components/Public/Footer';
import ProductCard from '../../components/Public/ProductCard';

const ProductPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;