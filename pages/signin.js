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
    <div>
      <LandingUI />
      <h1>Sign In</h1>
      <form onSubmit={e => {
        e.preventDefault();
        signIn();
      }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <button>Sign In</button>
      </form>
      <p>{error}</p>
      <Link href="/signup">
        <a>No account? Sign up</a>
      </Link>
    </div>
  );
}
