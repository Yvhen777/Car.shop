import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';

const ProductCard = () => {
  const [mainImage, setMainImage] = useState('/api/placeholder/800/600');
  const [activeForm, setActiveForm] = useState(null);
  const [activeTab, setActiveTab] = useState('functions');

  const carInfo = {
    brand: 'АУДИ',
    model: 'A6',
    modification: 'Avant 50 TFSI e quattro S Edition',
    price: '57 900 ЕВРО',
    mileage: '18 248 км',
    fuel: 'Гибрид (Бензин)',
    body: 'Вагон',
    maxPower: '299 л.с.',
    color: 'ЛН7В',
    year: '2022 год',
    doors: '5',
    engineVolume: '1984cc'
  };

  const thumbnails = [
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100',
    '/api/placeholder/100/100'
  ];

  const specs = {
    Марка: 'АУДИ',
    Модель: 'A6',
    'Год выпуска': '2022',
    Пробег: '18 248 км',
    'Тип кузова': 'Вагон',
    'Цвет': 'ЛН7В',
    'Двигатель': '1984cc / 299 л.с. / Гибрид (Бензин)',
    'Коробка': 'Автомат',
    'Привод': 'quattro',
    'Руль': 'Левый',
    'Состояние': 'Отличное',
    'VIN': 'WAUZZZ4S*JN******'
  };

  const InterestForm = () => (
    <form className="mt-4 space-y-4">
      <input type="text" placeholder="Имя" className="w-full p-2 border rounded" />
      <input type="tel" placeholder="Номер телефона" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Адрес электронной почты" className="w-full p-2 border rounded" />
      <textarea placeholder="Комментарий/вопрос" className="w-full p-2 border rounded" rows="4"></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Отправить</button>
    </form>
  );

  const TradeForm = () => (
    <form className="mt-4 space-y-4">
      <input type="text" placeholder="Имя" className="w-full p-2 border rounded" />
      <input type="tel" placeholder="Номер телефона" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Адрес электронной почты" className="w-full p-2 border rounded" />
      <input type="text" placeholder="Номерной знак" className="w-full p-2 border rounded" />
      <input type="text" placeholder="Пробег" className="w-full p-2 border rounded" />
      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="p-2 border rounded">Загрузить фото 1 (Макс. 4 Мб)</button>
        <button type="button" className="p-2 border rounded">Загрузить фото 2 (Макс. 4 Мб)</button>
        <button type="button" className="p-2 border rounded">Загрузить фото 3 (Макс. 4 Мб)</button>
        <button type="button" className="p-2 border rounded">Загрузить фото 4 (Макс. 4 Мб)</button>
      </div>
      <textarea placeholder="Любые комментарии" className="w-full p-2 border rounded" rows="4"></textarea>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Отправить</button>
    </form>
  );

  const FeatureParamsTabs = () => {
    const functions = {
      Бренд: 'Ауди',
      Модель: 'A6',
      Тип: 'Avant 50 TFSI e quattro S Edition',
      Исполнение: 'PHEV',
      Кузов: 'Вагон',
      'Чтение счетчика': '18248 КМ',
      Топливо: 'Гибрид (Бензин)',
      'Год постройки': '2022 год',
    };

    const params = {
      Экстерьер: [
        'Алюминиевые детали снаружи',
        'Наружные зеркала с автоматическим затемнением',
        'Наружные зеркала с электроприводом, с памятью',
        'Наружные зеркала складывающиеся с электроприводом',
        'Наружные зеркала с электрической регулировкой',
        'Наружные зеркала с подогревом',
      ],
      Интерьер: [],
      'Информационно-развлекательная система': [
        'Аудио установка',
        'Подготовка автомобильного телефона с Bluetooth',
        'Мультимедийная подготовка',
        'Полная карта навигационной системы',
        'Многофункциональный руль'
      ],
    };

    return (
      <div className="mt-8">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${activeTab === 'functions' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('functions')}
          >
            Функции
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'params' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('params')}
          >
            Параметры
          </button>
        </div>
        
        {activeTab === 'functions' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(functions).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-semibold">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'params' && (
          <div>
            {Object.entries(params).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-xl font-bold mb-2">{category}</h4>
                <ul className="list-disc list-inside">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const ContactForm = () => (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-8 rounded-lg">
      <div>
        <h3 className="text-2xl font-bold mb-4">Вопросы или интерес?</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Имя</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Имя" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Адрес электронной почты</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Адрес электронной почты" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Номер телефона</label>
              <input type="tel" id="phone" name="phone" className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Номер телефона" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Комментарий/вопрос</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 rounded bg-gray-800 border border-gray-700" placeholder="Комментарий/вопрос"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Отправить</button>
        </form>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Наши контактные данные</h3>
        <p className="mb-4">Пожалуйста, не стесняйтесь обращаться к нам. Если у вас есть вопросы, вам нужна дополнительная информация или вы готовы сделать шаг, мы здесь, чтобы помочь.</p>
        <div className="space-y-2">
          <p className="flex items-center"><Mail className="mr-2" size={18} /> info@autohoutum.nl</p>
          <p className="flex items-center"><Phone className="mr-2" size={18} /> +31 492 327 300</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="relative">
            <img src={mainImage} alt="Audi R8" className="w-full h-auto object-cover rounded" />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300">
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded cursor-pointer flex-shrink-0"
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{carInfo.brand} {carInfo.model}</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">{carInfo.modification}</p>
          <p className="text-xl sm:text-2xl font-bold text-green-400 mb-6">{carInfo.price}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p><span className="font-semibold">Пробег:</span> {carInfo.mileage}</p>
              <p><span className="font-semibold">Топливо:</span> {carInfo.fuel}</p>
              <p><span className="font-semibold">Форма тела:</span> {carInfo.body}</p>
              <p><span className="font-semibold">Макс. ресурсы:</span> {carInfo.maxPower}</p>
            </div>
            <div>
              <p><span className="font-semibold">Цвет:</span> {carInfo.color}</p>
              <p><span className="font-semibold">Год постройки:</span> {carInfo.year}</p>
              <p><span className="font-semibold">Двери:</span> {carInfo.doors}</p>
              <p><span className="font-semibold">Объем двигателя:</span> {carInfo.engineVolume}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button 
              onClick={() => setActiveForm(activeForm === 'interest' ? null : 'interest')} 
              className={`flex-1 p-2 rounded ${activeForm === 'interest' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Мне интересно
            </button>
            <button 
              onClick={() => setActiveForm(activeForm === 'trade' ? null : 'trade')} 
              className={`flex-1 p-2 rounded ${activeForm === 'trade' ? 'bg-green-700 text-white' : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              Я хочу торговать
            </button>
          </div>

          {activeForm === 'interest' && <InterestForm />}
          {activeForm === 'trade' && <TradeForm />}

          <div className="bg-gray-700 p-4 rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <img src="/api/placeholder/64/64" alt="Manager" className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-semibold">Спросить?</p>
              <p className="flex items-center"><Phone size={16} className="mr-2" /> +31 492 327 300</p>
              <p className="flex items-center"><Mail size={16} className="mr-2" /> info@autohoutum.nl</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Характеристики</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-semibold">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <FeatureParamsTabs />

      <ContactForm />
    </div>
  );
};

export default ProductCard;
