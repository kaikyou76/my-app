import headlinecss from './Headline.module.css'

export function Headline(props) {
  return (
    <div>        

        <h1 className={headlinecss.title}>
          <a href="https://nextjs.org">{props.page} page</a>
        </h1>

        <p className={headlinecss.description}>
          Get started by editing{' '}
          {props.children}
        </p>
    </div>
  )
}
