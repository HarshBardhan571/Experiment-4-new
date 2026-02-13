import Link from 'next/link'
import { useRouter } from 'next/router'
import Breadcrumbs from './Breadcrumbs'

export default function Layout({ children }) {
  const router = useRouter()

  function isLogged() {
    try {
      return !!localStorage.getItem('token')
    } catch (e) { return false }
  }

  function handleAuth() {
    if (isLogged()) {
      localStorage.removeItem('token')
      router.push('/')
    } else {
      router.push('/login')
    }
  }

  return (
    <div>
      <nav className="topnav">
        <div className="brand"><Link href="/">Exp3</Link></div>
        <ul className="menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
        <div className="auth">
          <button className="authBtn" onClick={handleAuth}>{isLogged() ? 'Logout' : 'Login'}</button>
        </div>
      </nav>

      <div className="inner">
        <Breadcrumbs />
        {children}
      </div>
    </div>
  )
}
