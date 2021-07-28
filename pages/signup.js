import React, { useState } from 'react';
import Link from 'next/link';
import LandingUI from '../components/LandingUI.js';

import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import getError from '../util/getError.js';

import styles from '../styles/SignInUp.module.css';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // attempts to create user with given credentials
  async function signUp() {
    setError('');
    // try to create user
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    // if user sign up fails
    } catch (e) {
      // get and set error message
      const message = getError(e);
      setError(message);
      return;
    };
    // create public user doc
    const uid = firebase.auth().currentUser.uid;
    await firebase.firestore().collection('users-public').doc(uid).set({
      name: name,
      joined: new Date().getTime()
    });
    // push movies page
    router.push('/movies');
  }

  // check auth state
  if (props.authed === undefined) return <div>Loading...</div>;
  if (props.authed === true) router.push('/movies');

  return (
    <div className={styles.container}>
      <LandingUI />
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={e => {
        e.preventDefault();
        signUp();
      }}>
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <div className={styles.buttondiv}>
          <button>Sign Up</button>
        </div>
      </form>
      <p className={styles.error}>{error}</p>
      <div className={styles.otherpage}>
        <Link href="/signin">
          <a>Have an account? Sign in</a>
        </Link>
      </div>
    </div>
  );
}
