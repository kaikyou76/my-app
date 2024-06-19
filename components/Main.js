import maincss from './Main.module.css'
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export function Main(props) {
  return (
      <main className={maincss.main}>
        <Headline page={props.page}>
         <code className={maincss.code}>pages/{props.page}.js</code>
        </Headline>
       <Links />
      </main>
  )
}
