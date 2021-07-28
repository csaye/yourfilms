import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Contact</h1>
        <div className={styles.iconlist}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
