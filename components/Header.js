import Link from "next/link";
import headercss from './Header.module.css'

export function Header() {
    return (
        <header className={headercss.header}>
         <Link href="/">
           <div className={headercss.anchor}>Index</div>
         </Link>
         <Link href="/about">
           <div className={headercss.anchor}>About</div>
         </Link>
        </header>
    )
}