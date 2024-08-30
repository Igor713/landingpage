import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import Features from '../../components/Features';
import Contact from '../../components/Contact';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Contact />
    </div>
  );
}
