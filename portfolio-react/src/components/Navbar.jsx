import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="brand">MyPortfolio</div>
      <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
