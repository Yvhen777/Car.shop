import React, { useState, useEffect } from 'react';
import styles from '../../styles/TestimonialSlider.module.css';

const Testimonial = ({ image, title, description, car }) => (
  <div className={styles.testimonial}>
    <img src={image} alt={title} className={styles.testimonialImage} />
    <h3 className={styles.testimonialTitle}>{title}</h3>
    <p className={styles.testimonialDescription}>{description}</p>
    <div className={styles.testimonialDivider}></div>
    <p className={styles.testimonialCar}>Купил: {car}</p>
  </div>
);

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const testimonials = [
    {
      image: '/testimonial1.jpg',
      title: 'Отличный сервис!',
      description: 'Я очень доволен своей покупкой. Персонал был очень внимателен и помог мне выбрать идеальный автомобиль.',
      car: 'Audi A4 2020'
    },
    {
      image: '/testimonial1.jpg',
      title: 'Отличный сервис!',
      description: 'Я очень доволен своей покупкой. Персонал был очень внимателен и помог мне выбрать идеальный автомобиль.',
      car: 'Audi A4 2020'
    },
    {
      image: '/testimonial1.jpg',
      title: 'Отличный сервис!',
      description: 'Я очень доволен своей покупкой. Персонал был очень внимателен и помог мне выбрать идеальный автомобиль.',
      car: 'Audi A4 2020'
    },
    {
      image: '/testimonial1.jpg',
      title: 'Отличный сервис!',
      description: 'Я очень доволен своей покупкой. Персонал был очень внимателен и помог мне выбрать идеальный автомобиль.',
      car: 'Audi A4 2020'
    },
      {
      image: '/testimonial1.jpg',
      title: 'Отличный сервис!',
      description: 'Я очень доволен своей покупкой. Персонал был очень внимателен и помог мне выбрать идеальный автомобиль.',
      car: 'Audi A4 2020'
    },
    {
      image: '/testimonial2.jpg',
      title: 'Превосходный выбор',
      description: 'Большой выбор автомобилей и отличные цены. Рекомендую всем, кто ищет качественный подержанный автомобиль.',
      car: 'BMW X5 2019'
    },
    {
      image: '/testimonial3.jpg',
      title: 'Профессиональный подход',
      description: 'Сотрудники компании проявили высокий профессионализм и помогли мне с выбором автомобиля, который полностью соответствует моим потребностям.',
      car: 'Mercedes-Benz C-Class 2021'
    },  // ... ваши отзывы ...
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timer);
    };
  }, [testimonials.length]);

  return (
    <section className={styles.testimonialSlider}>
      <h2 className={styles.title}>Отзывы наших клиентов</h2>
      <div className={styles.sliderContainer}>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={styles.testimonialWrapper}
              style={{
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)`,
                opacity: isMobile ? (index === currentIndex ? 1 : 0) : 1,
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
              }}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;