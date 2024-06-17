import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Links from '../components/Links'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          about page!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

       <Links />
      </main>

     <Footer />
    </div>
  )
}
