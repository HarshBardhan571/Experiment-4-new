import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const { state } = useAppContext()
  const favCount = state.favorites.length
  return (
    <nav className="nav">
      <div className="brand">Harsh Bardhan Singh</div>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
      <div className="navRight">
        <div className="favorites">⭐ {favCount}</div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
