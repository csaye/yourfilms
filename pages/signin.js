import React, { useState } from 'react';
import Link from 'next/link';
import LandingUI from '../components/LandingUI.js';

import firebase from 'firebase/app';
import getError from '../util/getError.js';

import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // attempts to authenticate user with given credentials
  async function signIn() {
    setError('');
    // try to authenticate user
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    // if user sign in fails
    } catch (e) {
      // get and set error message
      const message = getError(e);
      setError(message);
    }
  }

  return (
    <div className={styles.container}>
      <LandingUI />
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={e => {
        e.preventDefault();
        signIn();
      }}>
        <label htmlFor="signin-email">Email</label>
        <input
          id="signin-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="signin-password">Password</label>
        <input
          id="signin-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <div className={styles.buttondiv}>
          <button>Sign In</button>
        </div>
      </form>
      <p className={styles.error}>{error}</p>
      <div className={styles.otherpage}>
        <Link href="/signup">
          <a>No account? Sign up</a>
        </Link>
      </div>
    </div>
  );
}
