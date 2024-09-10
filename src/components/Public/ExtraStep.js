import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/ExtraStep.module.css';

const ExtraStep = () => {
  return (
    <section className={styles.extraStep}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/car-lineup.jpg" alt="Линейка автомобилей" className={styles.image} />
          <img src="/showroom.jpg" alt="Шоурум" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>МЫ СДЕЛАЕМ ЭТО ДОПОЛНИТЕЛЬНЫЙ ШАГ</h2>
          <p className={styles.description}>
            Вождение — это удовольствие, и оно начинается с молодого, хорошо оборудованного подержанного автомобиля. У нас вы всегда найдете не менее 75 молодых топовых подержанных автомобилей. Кроме того, у нас есть все необходимое, чтобы каждый день радоваться покупке.
          </p>
          <Link to="/about" className={styles.button}>
            Узнайте больше о нас
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExtraStep;