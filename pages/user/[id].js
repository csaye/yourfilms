import Image from 'next/image';
import Link from 'next/link';

import firebase from 'firebase/app';

export default function UserPage(props) {
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
  // retrieve public user data from id
  const userDoc = await firebase.firestore()
  .collection('users-public').doc(params.id).get();
  const data = userDoc.exists ? userDoc.data() : null;
  // return data revalidating every minute
  return {
    props: {
      data: data
    },
    revalidate: 60
  };
}
