import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCounter } from '../customhooks/useCounter'
import { useInputArray } from '../customhooks/useInputArray'
import { useBgColor } from '../customhooks/useBgColor'


export default function About() {
  const{bar, isShow, handleClick, handleDisplay} = useCounter();
  const{text, array, handleChange, handleAdd} = useInputArray();
  useBgColor();

  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header />
       {isShow ? <h1>{bar}</h1> : null}
      <button  onClick={handleClick}>
      累计按钮
      </button>
      <button onClick={handleDisplay}>
        {isShow ? "不显示" : "显示"}
      </button>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {console.log(array)}
        {array.map(item => {
          return(<li key={item}>{item}</li>);           
        })}
      </ul>
      <input type="text" value={text} onChange={handleChange} />
       <Main page="about"/>

     <Footer />
    </div>
  )
}
