import React, { useState } from 'react';
import Link from 'next/link';

import firebase from 'firebase/app';
import getError from '../util/getError.js';

import styles from '../styles/SignUp.module.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={e => {
        e.preventDefault();
        signUp();
      }}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
          autoComplete="new-password"
          required
        />
        <button>Sign Up</button>
      </form>
      <p>{error}</p>
      <Link href="/signin">
        <a>Have an account? Sign in</a>
      </Link>
    </div>
  );
}
