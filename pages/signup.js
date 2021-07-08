import React, { useState } from 'react';
import Link from 'next/link';

import firebase from 'firebase/app';

import styles from '../styles/SignUp.module.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
