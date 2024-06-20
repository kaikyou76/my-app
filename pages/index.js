import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'

export default function Home() {
  const[bar, setBar] = useState(1);
 
  const handleclick = (e) =>{
    setBar((bar) => bar + 1);
  };
  console.log(bar);
  useEffect(() =>{
    document.body.style.backgroundColor = "lightblue";
    return (() =>{
      document.body.style.backgroundColor = "lightgreen";
    })
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{bar}</h1>
      <button  onClick={handleclick}>
      累计按钮
      </button>
       <Main page="index"/>
     <Footer />
    </div>
  )
}
