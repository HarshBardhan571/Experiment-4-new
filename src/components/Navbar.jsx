import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="topnav">
      <div className="brand"><Link href="/">Exp3</Link></div>
      <ul className="menu">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
