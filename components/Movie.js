import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Movie.module.css';

export default function Movie(props) {
  const {
    id, original_title, poster_path, release_date, vote_average
  } = props.data;

  return (
    <div className={styles.container}>
      <Link href={`/movie/${id}`}>
        <a>
          <Image
            width="200px"
            height="300px"
            src={`http://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
          <p className={styles.description}>
            <b>{original_title}</b> ({new Date(release_date).getFullYear()})
            <br />
            ★ {vote_average ? vote_average : 'NR'}
          </p>
        </a>
      </Link>
    </div>
  );
}
