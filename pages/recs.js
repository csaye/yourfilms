import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/Recs.module.css';

export default function Recs(props) {
  if (props.authed === undefined) return <div>Loading...</div>;
  if (props.authed === false) return <div>This page requires auth</div>;

  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>Your Recommendations</h1>
      </div>
      <Footer />
    </>
  );
}
