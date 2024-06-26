import Linkscss from './Links.module.css'

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation ➡",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn ➡",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://nextjs.org/docs",
    title: "Examples ➡",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy ➡",
    description: "Instantly deploy your Next.js site to a public URL with Vercel."
  }
]

export function Links() {
  return (
    <div className={Linkscss.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.title} href={item.href} className={Linkscss.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        )
      })}
    </div>
  )
}
