import Head from 'next/head';

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig.js';

import '../styles/globals.css';

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App({ Component, pageProps }) {
  const [authed, setAuthed] = useState(undefined);

  // listen for user auth
  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged(() => {
      setAuthed(!!firebase.auth().currentUser);
    });
    return () => authListener();
  }, []);

  return (
    <>
      <Head>
        <title>Yourfilms</title>
        <meta name="description" content="A social media based around movies." />
        {/* icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        {/* styling */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <Component authed={authed} {...pageProps} />
    </>
  );
}

export default App;
