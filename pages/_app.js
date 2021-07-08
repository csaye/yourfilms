import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

import styles from '../styles/App.module.css';
import '../styles/globals.css';

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App({ Component, pageProps }) {
  useAuthState(firebase.auth());

  return (
    <>
      <Head>
        <title>MovieTalk</title>
        <meta name="description" content="A social media based around movies." />
        {/* icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        {/* styling */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
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
      <Component {...pageProps} />
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

export default App;
