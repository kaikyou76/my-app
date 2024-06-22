import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const[bar, setBar] = useState(1);
  const[text, setText] = useState("a");
 
  const handleClick = useCallback((e) =>{
    console.log(bar); 
      setBar((prevBar) => prevBar + 1);
  },[bar]);
  
  const handleChange = useCallback((e) => {
    console.log(text);
    if (e.target.value.length > 5) {
      alert("输入不能超过5个字符");
      return;
    }
    setText(e.target.value.trim());
  },[text]);
  
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
      <button  onClick={handleClick}>
      累计按钮
      </button>
      <input type="text" value={text} onChange={handleChange} />
       <Main page="index"/>
     <Footer />
    </div>
  )
}
