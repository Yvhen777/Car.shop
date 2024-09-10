import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../../components/Public/TestimonialSlider';
import ExtraStep from '../../components/Public/ExtraStep';
import ServiceOverview from '../../components/Public/ServiceOverview';
import NewArrivals from '../../components/Public/NewArrivals';
import Footer from '../../components/Public/Footer';
import { Instagram, Facebook, Twitter, Menu } from 'lucide-react';
import styles from '../../styles/MainPage.module.css';

// Обновленный компонент Header с изображением логотипа
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo.png" alt="Autohoutum Logo" className="h-8 md:h-12" />
          </Link>
          <div className="ml-4 hidden md:flex items-center">
            <span className="text-white mr-2 text-sm">Change language:</span>
            <button className="w-6 h-6 rounded-full overflow-hidden mr-1">
              <img src="/images/en-flag.png" alt="English" className="w-full h-full object-cover" />
            </button>
            <button className="w-6 h-6 rounded-full overflow-hidden mr-1">
              <img src="/images/es-flag.png" alt="Spanish" className="w-full h-full object-cover" />
            </button>
            <button className="w-6 h-6 rounded-full overflow-hidden">
              <img src="/images/ru-flag.png" alt="Russian" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-gray-300">Главная</Link>
          <Link to="/offers" className="hover:text-gray-300">Все машины</Link>
          <Link to="/about" className="hover:text-gray-300">О нас</Link>
          <Link to="/contact" className="hover:text-gray-300">Контакты</Link>
          <Link to="/schedule" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300">
            Заказать обратный звонок
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white absolute top-full left-0 right-0">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-800" onClick={toggleMenu}>Главная</Link>
          <Link to="/offers" className="block py-2 px-4 hover:bg-gray-800" onClick={toggleMenu}>Все машины</Link>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-800" onClick={toggleMenu}>О нас</Link>
          <Link to="/contact" className="block py-2 px-4 hover:bg-gray-800" onClick={toggleMenu}>Контакты</Link>
          <Link to="/schedule" className="block py-2 px-4 hover:bg-gray-800" onClick={toggleMenu}>Заказать обратный звонок</Link>
        </div>
      )}
    </header>
  );
};

const FeatureCard = ({ icon, title, description, link }) => (
  <Link to={link} className="flex items-center bg-black bg-opacity-70 p-4 rounded-lg hover:bg-opacity-90 transition duration-300">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="font-bold text-lg md:text-xl text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-xs md:text-sm">{description}</p>
    </div>
  </Link>
);

const Features = () => (
  <section className="absolute bottom-0 left-0 right-0 p-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <FeatureCard 
        icon={<div className="bg-white rounded-full p-2"><img src="/images/icons/car-icon.svg.png" alt="Car" className="w-6 h-6 md:w-8 md:h-8" /></div>}
        title="Посмотреть все предложения" 
        description="от компактного до просторного, от спортивного до электрического!" 
        link="/offers"
      />
      <FeatureCard 
        icon={<div className="bg-white rounded-full p-2"><img src="/images/icons/gear-icon.svg.png" alt="Gear" className="w-6 h-6 md:w-8 md:h-8" /></div>}
        title="Заказать консультацию" 
        description="Наш менеджер свяжется с вами и предложит наиболее выгодное решение для вас." 
        link="/contact"
      />
      <FeatureCard 
        icon={<div className="bg-white rounded-full p-2"><img src="/images/icons/question-icon.svg.png" alt="Question" className="w-6 h-6 md:w-8 md:h-8" /></div>}
        title="Чип-Тюнинг" 
        description="Узнай максимальную мощность своего автомобиля бесплатно." 
        link="/services"
      />
    </div>
  </section>
);

// Обновленный компонент Hero с разделением на desktopCta и mobileCta
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: '/images/slider-1.jpg' },
    { image: '/images/slider-2.jpg' },
    { image: '/images/slider-3.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className={styles.hero}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
          >
            <div className={styles.overlay}></div>
            <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </div>
        ))}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>ВАШ ИДЕАЛЬНЫЙ АВТОМОБИЛЬ</h1>
          <p className={styles.heroSubtitle}>- В АВТОХАУТУМЕ.</p>
          <p className={styles.heroDescription}>У нас есть что вам предложить. Просмотрите нашу страницу.</p>

          {/* Кнопка для десктопной версии */}
          <Link to="/offers" className={`${styles.heroCta} ${styles.desktopCta}`}>
            Посмотреть предложение
          </Link>

          {/* Кнопка для мобильной версии */}
          <Link to="/offers" className={`${styles.heroCta} ${styles.mobileCta}`}>
            Посмотреть предложение
          </Link>
        </div>
      </section>

      <section className={styles.desktopFeatures}>
        <Link to="/offers" className={styles.featureButton}>
          <img src="/images/icons/car-icon.svg.png" alt="Car" className={styles.featureIcon} />
          <div>
            <h3 className={styles.featureTitle}>Посмотреть все предложения</h3>
            <p className={styles.featureDescription}>от компактного до просторного, от спортивного до электрического!</p>
          </div>
        </Link>
        <Link to="/contact" className={styles.featureButton}>
          <img src="/images/icons/gear-icon.svg.png" alt="Gear" className={styles.featureIcon} />
          <div>
            <h3 className={styles.featureTitle}>Заказать консультацию</h3>
            <p className={styles.featureDescription}>Наш менеджер свяжется с вами и предложит наиболее выгодное решение для вас.</p>
          </div>
        </Link>
        <Link to="/services" className={styles.featureButton}>
          <img src="/images/icons/question-icon.svg.png" alt="Question" className={styles.featureIcon} />
          <div>
            <h3 className={styles.featureTitle}>Чип-Тюнинг</h3>
            <p className={styles.featureDescription}>Узнай максимальную мощность своего автомобиля бесплатно.</p>
          </div>
        </Link>
      </section>
    </>
  );
};

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Hero />
      <NewArrivals />
      <ServiceOverview />
      <ExtraStep />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default MainPage;
