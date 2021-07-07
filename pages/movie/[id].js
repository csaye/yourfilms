import Image from 'next/image';
import Link from 'next/link';

export default function MoviePage(props) {
  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      {
        props.ok ?
        <div>
          <h1>{props.data.original_title}</h1>
          <p>{props.data.overview}</p>
          <Image
            height="600"
            width="400"
            src={`http://image.tmdb.org/t/p/original${props.data.poster_path}`}
            alt=""
          />
        </div> :
        <p>Movie not found</p>
      }
    </div>
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
