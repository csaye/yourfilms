import Image from 'next/image';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import styles from '../../styles/MoviePage.module.css';

export default function MoviePage(props) {
  return (
    <>
      <Header />
      {
        props.ok ?
        <div className={styles.content}>
          <h1>{props.data.title}</h1>
          <p className={styles.release}>
            Released{' '}
            {new Date(props.data.release_date).toLocaleDateString()}
          </p>
          <p className={styles.overview}>{props.data.overview}</p>
          <div className={styles.genrelist}>
            {
              props.data.genres.map(g =>
                <div className={styles.genre} key={g.id}>{g.name}</div>
              )
            }
          </div>
          <p>Running time {props.data.runtime} minutes</p>
          <Image
            height="600px"
            width="400px"
            src={`http://image.tmdb.org/t/p/original${props.data.poster_path}`}
            alt="poster"
          />
          <h1>Recommended</h1>
          {
            props.recs &&
            props.recs.results.map(rec =>
              <p key={rec.id}>{rec.title}</p>
            )
          }
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
  const baseUrl = `https://api.themoviedb.org/3/movie/${params.id}`;
  const url = `${baseUrl}?api_key=${process.env.TMDB_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // if data ok, get recommendations
  let recs = undefined;
  if (response.ok) {
    // retrieve recommended movies
    const recsUrl = `${baseUrl}/recommendations?api_key=${process.env.TMDB_KEY}`;
    const recsResponse = await fetch(recsUrl);
    recs = await recsResponse.json();
  }
  // return data revalidating every hour
  return {
    props: {
      data: data,
      recs: recs,
      ok: response.ok
    },
    revalidate: 3600
  };
}
