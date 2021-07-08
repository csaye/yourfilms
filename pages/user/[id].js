import Image from 'next/image';
import Link from 'next/link';

import firebase from 'firebase/app';

export default function UserPage(props) {
  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      {
        props.data ?
        <div>
          {
            props.data.id === firebase.auth().currentUser?.uid &&
            <i>your page</i>
          }
          <h1>{props.data.name}</h1>
          <p>Joined {new Date(props.data.joined).toLocaleString()}</p>
        </div> :
        <p>User not found</p>
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
  // retrieve public user data from id
  const userDoc = await firebase.firestore()
  .collection('users-public').doc(params.id).get();
  const data = userDoc.exists ? { ...userDoc.data(), id: userDoc.id } : null;
  // return data revalidating every minute
  return {
    props: {
      data: data
    },
    revalidate: 60
  };
}
