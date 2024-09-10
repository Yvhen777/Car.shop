import React from 'react';
import Header from '../../components/Public/Header';
import Footer from '../../components/Public/Footer';
import TestimonialSlider from '../../components/Public/TestimonialSlider';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import styles from '../../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Header />
      
      <div className={styles.banner}>
        <img src="/contact-banner.jpg" alt="Contact Us" className={styles.bannerImage} />
        <h1 className={styles.bannerTitle}>Контакты</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Связаться с нами</h2>
            <form className={styles.form}>
              <input type="text" placeholder="Имя" className={styles.input} />
              <input type="email" placeholder="Адрес электронной почты" className={styles.input} />
              <input type="tel" placeholder="Номер телефона" className={styles.input} />
              <textarea placeholder="Вопрос/Комментарий" rows="4" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitButton}>Отправить</button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <h2 className={styles.contactInfoTitle}>Наши контактные данные</h2>
            <p>Пожалуйста, не стесняйтесь обращаться к нам. Если у вас есть вопросы, вам нужна дополнительная информация или вы готовы сделать шаг, мы здесь, чтобы помочь.</p>
            <div className={styles.contactDetails}>
              <p className={styles.contactItem}><MapPin className={styles.contactIcon} size={18} /> Де Влондер 7 5427 DB Букель</p>
              <p className={styles.contactItem}><Mail className={styles.contactIcon} size={18} /> info@autohoutum.nl</p>
              <p className={styles.contactItem}><Phone className={styles.contactIcon} size={18} /> +31 492 327 300</p>
              <div className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={18} />
                <div>
                  <p>С понедельника по пятницу: с 9:00 до 12:00 и с 13:00 до 17:00</p>
                  <p>Суббота: по предварительной записи с 9:00 до 13:00</p>
                  <p>Воскресенье: закрыто</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025254456!2d4.919488615775674!3d51.82636997969149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6864f6e8e2b63%3A0x86c8754c931f5d4!2sDe%20Vlonder%207%2C%205427%20DB%20Boekel%2C%20Netherlands!5e0!3m2!1sen!2s!4v1630619215273!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Карта местоположения"
          ></iframe>
        </div>

        <TestimonialSlider />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;