import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logoContainer}>
            <img src="/images/logo.png" alt="Autohoutum Logo" className={styles.logo} />
          </Link>
          <div className={styles.langButtons}>
            <button className={styles.langButton}>
              <img src="/images/en-flag.png" alt="English" />
            </button>
            <button className={styles.langButton}>
              <img src="/images/es-flag.png" alt="Spanish" />
            </button>
            <button className={styles.langButton}>
              <img src="/images/ru-flag.png" alt="Russian" />
            </button>
          </div>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <Link to="/offers" className={styles.navLink}>Все машины</Link>
          <Link to="/about" className={styles.navLink}>О нас</Link>
          <Link to="/contact" className={styles.navLink}>Контакты</Link>
          <Link to="/schedule" className={`${styles.navLink} ${styles.callbackButton}`}>
            Заказать обратный звонок
          </Link>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;