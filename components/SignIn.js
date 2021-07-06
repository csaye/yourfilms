import firebase from 'firebase/app';

import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  // opens google sign in popup
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div>
      <h1>MovieTalk</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
