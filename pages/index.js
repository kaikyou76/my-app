import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback } from 'react'
import Link from 'next/link'


export default function Home() {
  const bar =123456;
  const handleclick = useCallback((e) =>{
    console.log(e.target.href)
    e.preventDefault();//阻止链接到下一个页面
    alert(bar);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Link href="/about" onClick={handleclick}>
      链接到about页面
      </Link>
       <Main page="index"/>

     <Footer />
    </div>
  )
}
