import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/ServiceOverview.module.css';

const ServiceOverview = () => {
  return (
    <div className={styles.serviceOverviewWrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>МЫ ГОТОВЫ ДЛЯ ВАС</h2>
        <div className={styles.grid}>
          <div className={styles.mainImage}>
            <img src="/car-search.jpg" alt="Поиск автомобиля" />
            <div className={styles.mainImageContent}>
              <p className={styles.mainImageTitle}>Мы найдем ваш идеальный</p>
              <p className={styles.mainImageSubtitle}>автомобиль</p>
              <Link to="/search" className={styles.button}>
                Поиск
              </Link>
            </div>
          </div>
          <div className={styles.subImages}>
            <div className={styles.subImage}>
              <img src="/service.jpg" alt="Сервис" />
              <div className={styles.subImageContent}>
                <h3 className={styles.subImageTitle}>Сервис от А до Я</h3>
                <p className={styles.subImageDescription}>Воспользуйтесь нашим обширным сервисом. Просмотрите страницу нашего сервиса.</p>
                <Link to="/services" className={styles.button}>
                  Перейти к услугам
                </Link>
              </div>
            </div>
            <div className={styles.subImage}>
            <img src="/images/services/chip-tuning.jpg" alt="Мастерская" />
              <div className={styles.subImageContent}>
                <h3 className={styles.subImageTitle}>Современная мастерская</h3>
                <p className={styles.subImageDescription}>Мелкий или капитальный ремонт, летняя или зимняя резина, ремонт или тюнинг? Это возможно в нашей мастерской. Посмотреть возможности.</p>
                <Link to="/workshop" className={styles.button}>
                  Перейти в мастерскую
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceOverview;