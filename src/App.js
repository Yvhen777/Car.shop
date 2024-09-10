import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/Admin/AdminPage';
import MainPage from './pages/Public/MainPage';
import ProductPage from './pages/Public/ProductPage';
import ContactPage from './pages/Public/ContactPage';
import ServicesPage from './pages/Public/ServicesPage';
import AllOffersPage from './pages/Public/AllOffersPage';
import AboutPage from './pages/Public/AboutPage'; // Добавьте этот импорт
import 'antd/dist/reset.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/offers" element={<AllOffersPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Добавьте этот маршрут */}
      </Routes>
    </Router>
  );
};

export default App;