import HeroSection from '../components/HeroSection'

export default function Home(){
  return (
    <div>
      <HeroSection title="Hi, I'm Harsh" subtitle="A student developer — portfolio demo for Experiment 3" />
      <section style={{marginTop:16}}>
        <h2>About Me</h2>
        <p>I build small web apps and experiments. This portfolio demo shows routing using React Router.</p>
      </section>
    </div>
  )
}
