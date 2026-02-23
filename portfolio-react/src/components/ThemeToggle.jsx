import { useAppContext } from '../context/AppContext'

export default function ThemeToggle(){
  const { state, dispatch } = useAppContext()
  return (
    <button className="themeToggle" onClick={()=>dispatch({type:'TOGGLE_THEME'})}>
      {state.theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}
