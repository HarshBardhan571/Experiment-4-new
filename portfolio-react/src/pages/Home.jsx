import HeroSection from '../components/HeroSection'

export default function Home(){
  return (
    <div>
      <HeroSection title="Harsh Bardhan Singh" subtitle="Full‑stack student & developer — experiments, projects, and demos" />
      <section style={{marginTop:16}}>
        <h2>About Me</h2>
        <p>I build small web apps and experiments. This portfolio demo shows routing, global state, and performance optimizations.</p>
      </section>
    </div>
  )
}
