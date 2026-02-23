export default function HeroSection({title, subtitle}){
  return (
    <section className="hero">
      <div className="intro">
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className="badges">
          <span className="pill blue">Machine Learning</span>
          <span className="pill purple">Data Science</span>
          <span className="pill green">React Developer</span>
        </div>
        <div className="ctas">
          <a className="viewBtn" href="#projects">View My Work →</a>
        </div>
      </div>
      <div className="profile"><img src="./assets/profile.svg" alt="profile"/></div>
    </section>
  )
}
