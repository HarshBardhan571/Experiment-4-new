import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Analytics from './pages/Analytics'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  const navigate = useNavigate()
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<div style={{padding:40}}>404 - Not found <br/><Link to="/">Go home</Link></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
