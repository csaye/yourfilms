import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Movie.module.css';

export default function Movie(props) {
  const { id, original_title, popularity } = props.data;

  return (
    <div className={styles.container}>
      <Link href={`/movie/${id}`}>
        <a>
          <Image
            width="200px"
            height="300px"
            src="https://via.placeholder.com/200x300"
          />
          <p>{original_title}</p>
          <p>{popularity}★</p>
        </a>
      </Link>
    </div>
  );
}
