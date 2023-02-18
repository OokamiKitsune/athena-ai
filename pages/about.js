import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';



const Athena = () => (
  <div>
    <Head>
      <title>Athena AI</title>
      <link rel="icon" href="/athena.png" />
    </Head>
    <header className={styles.header}>

    <nav className={styles.navItem}>

        
      <Link href="/">
            <div>Home</div>
        </Link>

        <Link href="/about">
            <p>About</p>
        </Link>

    </nav>
    
    </header>

    <main className={styles.main}>
      <img src="/athena.png" className={styles.icon} />
      <h1 className={styles.title}>Athena AI</h1>
      <p className={styles.description}>
        Athena is a completion AI capable of responding to questions articulated in a more human way.
      </p>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Important Note</h2>
        <ul className={styles.list}>
          <li>Exercise common sense when trying to get answers to questions. Some responses are not always accurate and in some cases may occasionally be incorrect.</li>
          <li>Do not enter personal information.</li>
        </ul>
      </section>
    </main>
  </div>
);

export default Athena;
