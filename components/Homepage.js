import firebase from 'firebase/app';

import styles from '../styles/Homepage.module.css';

export default function Homepage() {
  return (
    <div>
      <h1>MovieTalk</h1>
      <p>Signed in as {firebase.auth().currentUser.displayName}</p>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </div>
  );
}
