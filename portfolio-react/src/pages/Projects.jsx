import CardComponent from '../components/CardComponent'

const demo = [
  {id:1, title:'Project A', desc:'A small notes app', tech:'React'},
  {id:2, title:'Project B', desc:'A product listing', tech:'Next.js'}
]

export default function Projects(){
  return (
    <div>
      <h2>Projects</h2>
      <div className="grid">
        {demo.map(p => (
          <CardComponent key={p.id} title={p.title} footer={<span className="muted">{p.tech}</span>}>
            <p>{p.desc}</p>
          </CardComponent>
        ))}
      </div>
    </div>
  )
}
