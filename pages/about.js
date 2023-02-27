import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.css';



const Athena = () => (
  <div>
    <Head>
      <title>Athena AI</title>
      <Link href="/"><link rel="icon" href="/athena.png" /></Link>
    </Head>
    <header className={styles.header}></header>
    
    <main className={styles.main}>
      <img src="/athena.png" className={styles.icon} />
      <h1 className={styles.title}>Athena AI</h1>
      <p className={styles.description}>
        Athena is a completion AI capable of articulating answers in a more human way.
      </p>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Important Note</h2>
        <ul className={styles.list}>
          <li>Exercise common sense when trying to get answers to a question.</li> 
          <li>Some responses are not always accurate and in some cases may occasionally be incorrect.</li>
          <li>AI is limited to so many words per response. While most generated answers will provide enough context, 
            some responses may be cut off. We are working on offering more tokens per response.</li>
          <li>This AI is similar to, but not ChatGPT.</li>  
          <li>Do not enter personal information.</li>
        </ul>
      </section>
      <Link href="/">
            
            <input type="submit" value="Try it out!" />
        </Link>
    </main>
  </div>
  
);

export default Athena;
