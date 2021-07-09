import Header from './Header.js';
import Footer from './Footer.js';

import styles from '../styles/LandingUI.module.css';

export default function LandingUI() {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
