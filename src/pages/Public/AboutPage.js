import React from 'react';
import Header from '../../components/Public/Header';
import Footer from '../../components/Public/Footer';
import TestimonialSlider from '../../components/Public/TestimonialSlider';
import styles from '../../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>О нас</h1>
          
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src="/about-us-image.jpg" alt="О нашей компании" className={styles.image} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>Наша история</h2>
              <p className={styles.paragraph}>
                Компания Autohoutum была основана в 2005 году с целью предоставления высококачественных автомобилей и исключительного сервиса нашим клиентам. За годы работы мы стали одним из ведущих дилеров подержанных автомобилей в регионе.
              </p>
              <p className={styles.paragraph}>
                Наша миссия - помочь каждому клиенту найти идеальный автомобиль, который соответствует его потребностям и бюджету. Мы гордимся нашим широким выбором автомобилей и профессиональным, дружелюбным персоналом.
              </p>
            </div>
          </div>
          
          <div className={styles.whyChooseUs}>
            <h2 className={styles.subtitle}>Почему выбирают нас</h2>
            <ul className={styles.list}>
              <li>Широкий выбор качественных подержанных автомобилей</li>
              <li>Профессиональный и дружелюбный персонал</li>
              <li>Прозрачность в ценообразовании и сделках</li>
              <li>Гарантия на все продаваемые автомобили</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
          
          <TestimonialSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;