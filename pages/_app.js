import '../styles/globals.css'
import { useCounter } from '../customhooks/useCounter'
import { useInputArray } from '../customhooks/useInputArray'
import { useBgColor } from '../customhooks/useBgColor'

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  return <Component {...pageProps} {...counter} {...inputArray} />
}

export default MyApp
