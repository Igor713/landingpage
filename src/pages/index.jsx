import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
    </div>
  );
}
