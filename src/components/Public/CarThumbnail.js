import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CarThumbnail = ({ id, image, brand, model, price, year, mileage, transmission }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={`${brand} ${model}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{brand} {model}</h3>
        <p className="text-2xl font-bold text-white mt-2">{price} евро</p>
        <div className="mt-4 text-gray-400">
          <p>Пробег: {mileage} км</p>
          <p>Год постройки: {year}</p>
          <p>Передача: {transmission}</p>
        </div>
        <Link 
          to={`/product/${id}`} 
          className="mt-4 flex items-center justify-between bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          <span>Подробнее</span>
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default CarThumbnail;