export default function HeroSection({title, subtitle}){
  return (
    <section className="hero">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </section>
  )
}
