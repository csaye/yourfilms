import Head from 'next/head';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

import '../styles/globals.css';

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App({ Component, pageProps }) {
  useAuthState(firebase.auth());

  return (
    <>
      <Head>
        <title>MovieTalk</title>
        <meta name="description" content="A social media based around movies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
