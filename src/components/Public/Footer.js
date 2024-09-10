import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
        <img src="/images/logo.png" alt="Autohoutum Logo" className="h-12 mb-4" />
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="text-lg font-semibold mb-2">Пожалуйста, свяжитесь с нами</h3>
            <p>De Vlonder 7</p>
            <p>5427 DB Boekel</p>
            <p>Тел.: +31 492 327 300</p>
            <p>Электронная почта: info@autohoutum.nl</p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-white" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-white" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Часы работы</h3>
            <p>С понедельника по пятницу:</p>
            <p>с 9:00 до 12:00 и с 13:00 до 17:00</p>
            <p>Суббота:</p>
            <p>по предварительной записи с 9:00 до 13:00</p>
            <p>Воскресенье: закрыто</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;