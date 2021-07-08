import Image from 'next/image';
import Link from 'next/link';

import firebase from 'firebase/app';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>MovieTalk</h1>
        <Image
          height="48"
          width="48"
          src="/img/logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.links}>
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
