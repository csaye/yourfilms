import Movie from '../components/Movie.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { useState } from 'react';
import firebase from 'firebase/app';
import { movies } from '../data/movies.js';

import styles from '../styles/Movies.module.css';

export default function Movies() {
  const [sortBy, setSortBy] = useState('');

  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Movies</h1>
        <div className={styles.options}>
          Sort by{' '}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="popularity">Popularity</option>
            <option value="release_date">Release Date</option>
            <option value="vote_average">Vote Average</option>
            <option value="vote_count">Vote Count</option>
          </select>
        </div>
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
