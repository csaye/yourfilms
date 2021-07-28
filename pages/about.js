import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>About</h1>
      </div>
      <Footer />
    </>
  );
}
