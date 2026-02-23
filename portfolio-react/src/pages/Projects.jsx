import { useState } from 'react'
import CardComponent from '../components/CardComponent'
import { useAppContext } from '../context/AppContext'
import FilterBar from '../components/FilterBar'

const demo = [
  {id:1, title:'Project A', desc:'A small notes app', tech:'React'},
  {id:2, title:'Project B', desc:'A product listing', tech:'Next.js'}
]

export default function Projects(){
  const { state, dispatch } = useAppContext()
  const [visible, setVisible] = useState(demo)

  function addFav(p){
    dispatch({type:'ADD_FAVORITE', payload:p})
  }
  function removeFav(id){
    dispatch({type:'REMOVE_FAVORITE', payload:id})
  }
  const isFavorite = id => state.favorites.some(f=>f.id===id)

  return (
    <div>
      <h2>Projects</h2>
      <FilterBar items={demo} onChange={setVisible} />
      <div className="grid">
        {visible.map(p => (
          <CardComponent key={p.id} title={p.title} footer={<span className="muted">{p.tech}</span>}>
            <img className="projectImage" src={`./assets/project${p.id}.svg`} alt={p.title} />
            <div style={{minHeight:60}}>
              <p>{p.desc}</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
              <div>
                {isFavorite(p.id)
                  ? <button onClick={()=>removeFav(p.id)}>Remove favorite</button>
                  : <button className="primary" onClick={()=>addFav(p)}>Add favorite</button>
                }
              </div>
              <a className="secondary" href="#" onClick={(e)=>e.preventDefault()}>View demo</a>
            </div>
          </CardComponent>
        ))}
      </div>
    </div>
  )
}
