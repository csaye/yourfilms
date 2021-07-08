import Image from 'next/image';
import Link from 'next/link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import styles from '../styles/LandingUI.module.css';

export default function LandingUI() {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.lheader}>
        <Link href="/">
          <a>
            <Image
              height="48px"
              width="48px"
              src="/img/logo2.png"
              alt="logo2"
            />
          </a>
        </Link>
      </div>
      <div className={styles.rheader}>
        <Link href="/signin">
          <a>SIGN IN</a>
        </Link>
        <Link href="/signup">
          <a>SIGN UP</a>
        </Link>
        <Link href="/movies">
          <a>MOVIES</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </div>
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
        © MovieTalk {new Date().getFullYear()}.
        Film data from{' '}
        <a
          className="styled"
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDb
        </a>
        .
      </p>
    </>
  );
}
