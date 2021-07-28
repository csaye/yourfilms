import Movie from '../components/Movie.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import firebase from 'firebase/app';
import { movies } from '../data/movies.js';

import styles from '../styles/Movies.module.css';

export default function Movies() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Movies</h1>
        <div className={styles.movielist}>
          {
            movies.map(movie => <Movie key={movie.id} data={movie} />)
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
