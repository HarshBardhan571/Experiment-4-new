import HeroSection from '../components/HeroSection'
import Link from 'next/link'

export default function Home(){
  return (
    <main>
      <HeroSection title="Welcome to Experiment 3" subtitle="Colorful notes, products and routing demo" />
      <section style={{marginTop:16}}>
        <h2>Overview</h2>
        <p>This project contains multiple pages demonstrating routing, layouts, protected routes, and more.</p>
        <p><Link href="/projects">See Projects</Link></p>
      </section>
    </main>
  )
}
