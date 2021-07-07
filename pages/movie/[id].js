export default function MoviePage(props) {
  return (
    <div>
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
