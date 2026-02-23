import React from 'react'

const skills = [
  {id:1,name:'Machine Learning',pct:85},
  {id:2,name:'Data Science',pct:80},
  {id:3,name:'React Development',pct:75},
  {id:4,name:'Python',pct:90},
  {id:5,name:'SQL',pct:70}
]

export default function Analytics(){
  const total = skills.length
  const strong = skills.filter(s=>s.pct>=80).length
  const avg = Math.round(skills.reduce((a,b)=>a+b.pct,0)/total)

  return (
    <div>
      <h1>My Skill Analytics Dashboard</h1>
      <div className="analytics-stats">
        <div className="stat"><strong>{total}</strong><div className="muted">Total Skills</div></div>
        <div className="stat"><strong>{strong}</strong><div className="muted">Strong Skills (80%+)</div></div>
        <div className="stat"><strong>{avg}%</strong><div className="muted">Average Skill Level</div></div>
      </div>

      {skills.map(s=> (
        <div className="skill-row" key={s.id}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <strong>{s.name}</strong>
            <span className="muted">{s.pct}%</span>
          </div>
          <div className="progress" style={{marginTop:8}}>
            <span style={{width:`${s.pct}%`}}></span>
          </div>
          <button className="removeBtn">Remove</button>
        </div>
      ))}
    </div>
  )
}
