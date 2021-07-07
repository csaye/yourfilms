import Link from 'next/link';

import styles from '../styles/Movie.module.css';

export default function Movie(props) {
  const { id, original_title, popularity } = props.data;

  return (
    <div className={styles.container}>
      <Link href={`/movie/${id}`}>
        <a>{original_title} / {popularity}★</a>
      </Link>
    </div>
  );
}
