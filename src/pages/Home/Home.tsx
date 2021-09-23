import { ExampleForm, Header } from '../../components';
import styles from './Home.module.css';

const Home = ({ history }: any) => (
  <section className={styles.home_container}>
    <Header className={styles.header} history={history} />
    <main className={`${styles.main} wrapper`}>
      <ExampleForm />
    </main>
    <footer className={styles.footer} />
  </section>
);

export default Home;
