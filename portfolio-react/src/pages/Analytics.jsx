import { useMemo } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Analytics(){
  const { state, dispatch } = useAppContext()

  const favCount = useMemo(()=> state.favorites.length, [state.favorites])
  const favTitles = useMemo(()=> state.favorites.map(f=>f.title).join(', ') || '—', [state.favorites])

  return (
    <div>
      <h2>Analytics</h2>
      <p>Favorites count (memoized): <strong>{favCount}</strong></p>
      <p>Favorites: <em>{favTitles}</em></p>
      <div style={{marginTop:12}}>
        <button onClick={()=>dispatch({type:'CLEAR_FAVORITES'})}>Clear favorites</button>
      </div>
    </div>
  )
}
