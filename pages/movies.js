import Movie from '../components/Movie.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { useState } from 'react';
import firebase from 'firebase/app';

import styles from '../styles/Movies.module.css';

export default function Movies(props) {
  const [sortBy, setSortBy] = useState('popularity');

  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Movies</h1>
        <div className={styles.options}>
          Sort by{' '}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="release_date">Release Date</option>
            <option value="vote_average">Vote Average</option>
            <option value="vote_count">Vote Count</option>
          </select>
        </div>
        <div className={styles.movielist}>
          {
            sortBy === 'popularity' &&
            props.movies.sort((a, b) => b.popularity - a.popularity)
            .map(movie => <Movie key={movie.id} data={movie} />)
          }
          {
            sortBy === 'release_date' &&
            props.movies.sort((a, b) =>
              new Date(b.release_date) - new Date(a.release_date)
            )
            .map(movie => <Movie key={movie.id} data={movie} />)
          }
          {
            sortBy === 'vote_average' &&
            props.movies.sort((a, b) => b.vote_average - a.vote_average)
            .map(movie => <Movie key={movie.id} data={movie} />)
          }
          {
            sortBy === 'vote_count' &&
            props.movies.sort((a, b) => b.vote_count - a.vote_count)
            .map(movie => <Movie key={movie.id} data={movie} />)
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // retrieve top 60 popular movies
  let movies = [];
  const baseUrl = `https://api.themoviedb.org/3/movie/popular`;
  for (let page = 1; page < 4; page++) {
    // retrieve movies for each page
    const url = `${baseUrl}?page=${page}&api_key=${process.env.TMDB_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    movies = movies.concat(data.results);
  }
  // return data revalidating every day
  return {
    props: {
      movies: movies
    },
    revalidate: 86400
  };
}
