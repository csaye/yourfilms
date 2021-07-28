import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Auctor neque vitae tempus quam pellentesque nec. Bibendum ut tristique et egestas. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Platea dictumst quisque sagittis purus.
        </p>
        <p>
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam etiam erat velit scelerisque in dictum. Et magnis dis parturient montes nascetur ridiculus. Libero volutpat sed cras ornare arcu dui vivamus arcu. Euismod lacinia at quis risus sed vulputate odio. Arcu non sodales neque sodales ut etiam. Faucibus scelerisque eleifend donec pretium vulputate sapien.
        </p>
        <p>
          At risus viverra adipiscing at in tellus integer feugiat scelerisque. Integer eget aliquet nibh praesent. Quisque non tellus orci ac auctor augue mauris augue neque. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet purus gravida quis blandit turpis cursus in. Nibh tellus molestie nunc non blandit massa enim nec. Scelerisque varius morbi enim nunc. Adipiscing tristique risus nec feugiat in. Mi ipsum faucibus vitae aliquet nec ullamcorper.
        </p>
        <p>
          Pharetra massa massa ultricies mi quis hendrerit dolor. Id ornare arcu odio ut sem nulla pharetra. Tellus cras adipiscing enim eu turpis. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Quisque id diam vel quam elementum pulvinar. Vitae nunc sed velit dignissim sodales ut eu sem. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Cursus sit amet dictum sit amet justo donec enim diam.
        </p>
      </div>
      <Footer />
    </>
  );
}
