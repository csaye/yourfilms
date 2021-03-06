import Image from 'next/image';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Movie from '../../components/Movie.js';

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
              {
                props.data.release_date ?
                <>
                  Released{' '}
                  {new Date(props.data.release_date).toLocaleDateString()}
                </> :
                <>Unreleased</>
              }
            </p>
            <p className={styles.overview}>{props.data.overview}</p>
            <div className={styles.cardlist}>
              {
                props.data.genres.map(g =>
                  <div className={styles.card} key={g.id}>{g.name}</div>
                )
              }
            </div>
            {
              !!props.data.runtime &&
              <p>Running time {props.data.runtime} minutes</p>
            }
            <Image
              height="600px"
              width="400px"
              src={`http://image.tmdb.org/t/p/original${props.data.poster_path}`}
              alt="poster"
            />
            <h1>Watch</h1>
            {
              props.providers.results.US ?
              <div className={styles.watchdata}>
                {
                  props.providers.results.US.rent &&
                  <>
                    <p>Rent</p>
                    <div className={styles.cardlist}>
                      {
                        props.providers.results.US.rent.map(provider =>
                          <div className={styles.card} key={provider.provider_id}>
                            {provider.provider_name}
                          </div>
                        )
                      }
                    </div>
                  </>
                }
                {
                  props.providers.results.US.buy &&
                  <>
                    <p><b>Buy</b></p>
                    {
                      <div className={styles.cardlist}>
                        {
                          props.providers.results.US.buy.map(provider =>
                            <div className={styles.card} key={provider.provider_id}>
                              {provider.provider_name}
                            </div>
                          )
                        }
                      </div>
                    }
                  </>
                }
                <a
                  className="url"
                  href={props.providers.results.US.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Information
                </a>
              </div> :
              <p>No watch data found</p>
            }
            <h1>Recommended</h1>
            <div className={styles.movielist}>
              {
                props.recs.results.length ?
                props.recs.results.map(rec =>
                  <Movie data={rec} key={rec.id} />
                ) :
                <p>No recommendations found</p>
              }
            </div>
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
  // if data ok, get recommendations and providers
  let recs = undefined;
  let providers = undefined;
  if (response.ok) {
    // retrieve recommended movies
    const recsUrl = `${baseUrl}/recommendations?api_key=${process.env.TMDB_KEY}`;
    const recsResponse = await fetch(recsUrl);
    recs = await recsResponse.json();
    // retrieve watch providers
    const provUrl = `${baseUrl}/watch/providers?api_key=${process.env.TMDB_KEY}`;
    const provResponse = await fetch(provUrl);
    providers = await provResponse.json();
  }
  // return data revalidating every hour
  return {
    props: {
      data: data,
      recs: recs,
      providers: providers,
      ok: response.ok
    },
    revalidate: 3600
  };
}
