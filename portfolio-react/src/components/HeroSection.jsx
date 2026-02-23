export default function HeroSection({title, subtitle}){
  return (
    <section className="hero">
      <div className="intro">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className="ctas">
          <a className="primary" href="#projects">See projects</a>
          <a className="secondary" href="/contact">Contact me</a>
        </div>
      </div>
      <div className="profile">HB</div>
    </section>
  )
}
