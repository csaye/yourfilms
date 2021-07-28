import Image from 'next/image';
import Link from 'next/link';

import firebase from 'firebase/app';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
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
        {
          firebase.auth().currentUser &&
          <>
            <Link href={`/user/${firebase.auth().currentUser.uid}`}>
              <a>PROFILE</a>
            </Link>
            <Link href="/recs">
              <a>RECS</a>
            </Link>
          </>
        }
        <Link href="/movies">
          <a>MOVIES</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
        {
          firebase.auth().currentUser ?
          <button onClick={() => firebase.auth().signOut()}>
            SIGN OUT
          </button> :
          <>
          <Link href="/signup">
            <a>SIGN UP</a>
          </Link>
            <Link href="/signin">
              <a>SIGN IN</a>
            </Link>
          </>
        }
      </div>
    </div>
  );
}
