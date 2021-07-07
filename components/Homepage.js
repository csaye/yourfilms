import Movie from './Movie.js';

import firebase from 'firebase/app';
import { movies } from '../data/movies.js';

import styles from '../styles/Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>MovieTalk</h1>
        <p>Signed in as {firebase.auth().currentUser.displayName}</p>
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
      </div>
      <div className={styles.movielist}>
        {
          movies.map(movie => <Movie key={movie.id} data={movie} />)
        }
      </div>
    </div>
  );
}
