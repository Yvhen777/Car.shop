import React from 'react';
import Header from '../../components/Public/Header';
import Footer from '../../components/Public/Footer';
import styles from '../../styles/ServicesPage.module.css';

const ChipTuningForm = () => (
  <div className={styles.chipTuningForm}>
    <h2 className={styles.formTitle}>Хотите улучшить ваш автомобиль?</h2>
    <div className={styles.formContent}>
      <div className={styles.formSection}>
        <form>
          <div>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" className={styles.formInput} placeholder="Ваше имя" />
          </div>
          <div>
            <label htmlFor="email">Адрес электронной почты</label>
            <input type="email" id="email" className={styles.formInput} placeholder="Ваш email" />
          </div>
          <div>
            <label htmlFor="phone">Номер телефона</label>
            <input type="tel" id="phone" className={styles.formInput} placeholder="Ваш телефон" />
          </div>
          <div>
            <label htmlFor="car-details">Укажите данные вашего автомобиля</label>
            <textarea id="car-details" className={styles.formTextarea} rows="4" placeholder="Марка, модель, год выпуска, объем двигателя"></textarea>
          </div>
          <button type="submit" className={styles.formButton}>Отправить запрос</button>
        </form>
      </div>
      <div className={styles.formSection}>
        <img src="/chip-tuning.jpg" alt="Чип-тюнинг" className={styles.formImage} />
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <Header />
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Чип-Тюнинг</h1>
          <div className={styles.iframeContainer}>
            <iframe 
              src="https://portal.modsperformance.com/index.php?option=com_rsform&view=rsform&formId=74&bgcolor=000&fcolor=fff" 
              className={styles.iframe}
              scrolling="auto" 
              allowFullScreen
              title="Vehicle Statistics Module"
            ></iframe>
          </div>
          <ChipTuningForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;