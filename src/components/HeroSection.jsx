export default function HeroSection({title,subtitle}){
  return (
    <div className="hero">
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  )
}
