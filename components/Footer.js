import footercss from './Footer.module.css'

export function Footer() {
  return (
      <footer className={footercss.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={footercss.logo} />
        </a>
      </footer>
  )
}
