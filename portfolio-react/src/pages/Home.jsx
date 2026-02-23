import HeroSection from '../components/HeroSection'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <HeroSection title="Harsh Bardhan Singh" subtitle="Full‑stack student & developer — experiments, projects, and demos" />

      <section id="about" style={{marginTop:18}}>
        <h2>About Me</h2>
        <p>I build small web apps and experiments focused on clean UI and practical learning. This portfolio demonstrates routing, global state, and performance optimizations.</p>
      </section>

      <section id="skills" style={{marginTop:18}}>
        <h2>Skills</h2>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:8}}>
          <span className="card">React</span>
          <span className="card">JavaScript</span>
          <span className="card">HTML & CSS</span>
          <span className="card">Vite / Next</span>
          <span className="card">useContext / useReducer</span>
        </div>
      </section>

      <section id="projects" style={{marginTop:18}}>
        <div className="stats">
          <div className="stat"><strong>6</strong><div className="muted">projects</div></div>
          <div className="stat"><strong>3</strong><div className="muted">years learning</div></div>
          <div className="stat"><strong>10+</strong><div className="muted">technologies</div></div>
        </div>

        <h2>Featured Projects</h2>
        <p className="muted">A selection of small experiments and demos. <Link to="/projects">See all projects</Link></p>
        <div className="grid" style={{marginTop:12}}>
          <article className="card">
            <img className="projectImage" src="./assets/project1.svg" alt="project" />
            <h3>Notes App</h3>
            <p className="muted">A client-side notes app with persistence and search.</p>
          </article>
          <article className="card">
            <img className="projectImage" src="./assets/project2.svg" alt="project" />
            <h3>Products Demo</h3>
            <p className="muted">A product listing demo with filters and routing.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
