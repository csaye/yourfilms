import React, { useState } from 'react';
import Link from 'next/link';

import firebase from 'firebase/app';

import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
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
