import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import firebase from 'firebase/app';

import styles from '../../styles/UserPage.module.css';

export default function UserPage(props) {
  return (
    <>
      <Header />
      <Link href="/users">
        <a>← Back</a>
      </Link>
      {
        props.data ?
        <div className={styles.content}>
          {
            props.data.id === firebase.auth().currentUser?.uid &&
            <i>your page</i>
          }
          <h1>{props.data.name}</h1>
          <p>Joined {new Date(props.data.joined).toLocaleString()}</p>
        </div> :
        <p>User not found</p>
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
