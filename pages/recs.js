import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/Recs.module.css';

export default function Recs() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Your Recommendations</h1>
      </div>
      <Footer />
    </div>
  );
}
