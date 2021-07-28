import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Contact</h1>
      </div>
      <Footer />
    </>
  );
}
