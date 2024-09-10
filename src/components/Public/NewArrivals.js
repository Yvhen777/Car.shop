import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/NewArrivals.module.css';

const CarCard = ({ image, brand, model, price, modification, mileage, year, transmission }) => {
  return (
    <div className={styles.carCardInner}>
      <img src={image} alt={`${brand} ${model}`} className={styles.carImage} />
      <div className={styles.carInfoContainer}>
        <div className={styles.carInfo}>
          <h3 className={styles.carTitle}>{brand} {model}</h3>
          <p className={styles.carPrice}>{price} евро</p>
          <p className={styles.carDetails}>{modification}</p>
          <p className={styles.carDetails}>Пробег: {mileage} км</p>
          <p className={styles.carDetails}>Год: {year}</p>
          <p className={styles.carDetails}>Коробка: {transmission}</p>
        </div>
        <Link to="/car-details" className={styles.detailsButton}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cars = [
    {
      image: '/car1.jpg',
      brand: 'Ауди',
      model: 'R8',
      price: '169 500',
      modification: '5.2 натуро',
      mileage: '32 645',
      year: '2020',
      transmission: 'Автоматическая'
    },
    {
      image: '/car2.jpg',
      brand: 'Ауди',
      model: 'A6',
      price: '57 900',
      modification: 'Avant 50 TFSI e quattro S Edition',
      mileage: '18 248',
      year: '2022',
      transmission: 'Автоматическая'
    },
    {
      image: '/car3.jpg',
      brand: 'Ауди',
      model: 'C6',
      price: '22 500',
      modification: 'Лимна Avant 5.2 FSI V10 Pro',
      mileage: '244 567',
      year: '2007',
      transmission: 'Автоматическая'
    },
    // Добавьте больше автомобилей по необходимости
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [cars.length]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>НОВИНКА В НАШЕМ ПРЕДЛОЖЕНИИ</h2>
        <div className={styles.carouselContainer}>
          <div className={styles.carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {cars.map((car, index) => (
              <div key={index} className={styles.carCard}>
                <CarCard {...car} />
              </div>
            ))}
          </div>
        </div>
        <Link to="/offers" className={`${styles.button} ${styles.viewAllButton}`}>
          Посмотреть все автомобили
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;