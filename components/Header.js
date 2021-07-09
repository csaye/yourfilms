import Image from 'next/image';
import Link from 'next/link';

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
    </div>
  );
}
