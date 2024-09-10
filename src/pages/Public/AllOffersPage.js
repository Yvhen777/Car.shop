import React from 'react';
import Header from '../../components/Public/Header';
import Footer from '../../components/Public/Footer';
import CarThumbnail from '../../components/Public/CarThumbnail';
import TestimonialSlider from '../../components/Public/TestimonialSlider';
import styles from '../../styles/AllOffersPage.module.css';

const AllOffersPage = () => {
  // Пример данных (в реальном приложении их нужно загружать с сервера)
  const cars = [
    { id: 1, image: '/car1.jpg', brand: 'Мерседес-Бенц', model: 'EQA', price: '36 900', year: '2021', mileage: '41 721', transmission: 'Автоматический' },
    { id: 2, image: '/car2.jpg', brand: 'Фольксваген', model: 'ИД 4', price: '37 900', year: '2022', mileage: '45 513', transmission: 'Автоматический' },
    { id: 3, image: '/car3.jpg', brand: 'Ауди', model: 'R8', price: '169 500', year: '2020', mileage: '32 645', transmission: 'Автоматический' },
    { id: 1, image: '/car1.jpg', brand: 'Мерседес-Бенц', model: 'EQA', price: '36 900', year: '2021', mileage: '41 721', transmission: 'Автоматический' },
    { id: 2, image: '/car2.jpg', brand: 'Фольксваген', model: 'ИД 4', price: '37 900', year: '2022', mileage: '45 513', transmission: 'Автоматический' },
    { id: 3, image: '/car3.jpg', brand: 'Ауди', model: 'R8', price: '169 500', year: '2020', mileage: '32 645', transmission: 'Автоматический' },
    // Добавьте больше автомобилей по необходимости
  ];

  return (
    <div className={styles.allOffersPage}>
      <Header />
      <main className={styles.allOffersContainer}>
        <h1 className={styles.pageTitle}>Все предложения</h1>
        <div className={styles.carGrid}>
          {cars.map((car) => (
            <CarThumbnail key={car.id} {...car} />
          ))}
        </div>
        
        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>Отзывы наших клиентов</h2>
          <TestimonialSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllOffersPage;
