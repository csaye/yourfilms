import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import styles from '../../styles/MoviePage.module.css';

export default function MoviePage(props) {
  return (
    <>
      <Header />
      <Link href="/movies">
        <a>← Back</a>
      </Link>
      {
        props.ok ?
        <div className={styles.content}>
          <h1>{props.data.original_title}</h1>
          <p>{props.data.overview}</p>
          <p>Released {props.data.release_date}</p>
          <p>{props.data.genres.map(g => g.name).join(', ')}</p>
          <p>Runtime {props.data.runtime}m</p>
          <Image
            height="600px"
            width="400px"
            src={`http://image.tmdb.org/t/p/original${props.data.poster_path}`}
            alt=""
          />
        </div> :
        <p>Movie not found</p>
      }
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  // retrieve movie data from id
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  const url = `${baseUrl}/${params.id}?api_key=${process.env.TMDB_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // return data revalidating every hour
  return {
    props: {
      data: data,
      ok: response.ok
    },
    revalidate: 3600
  };
}
