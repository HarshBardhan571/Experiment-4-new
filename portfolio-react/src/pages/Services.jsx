export default function Services(){
  const list = [
    {id:1,title:'Web Development',desc:'React apps, responsive UIs, and single-page apps.'},
    {id:2,title:'Data Science',desc:'Data analysis, simple ML experiments, and visualization.'},
    {id:3,title:'Consulting',desc:'Project planning and small feature builds.'}
  ]
  return (
    <div>
      <h2>Services</h2>
      <div className="grid" style={{marginTop:12}}>
        {list.map(s=> (
          <article key={s.id} className="card">
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
