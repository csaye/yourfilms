import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.lfooter}>
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
      </p>
      <p className={styles.rfooter}>
        © Yourfilms {new Date().getFullYear()}.
        Film data from{' '}
        <a
          className="url"
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDb
        </a>
        . Streaming data from{' '}
        <a
          className="url"
          href="https://www.justwatch.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          JustWatch
        </a>
        .
      </p>
    </div>
  );
}
