import React, { createContext, useContext, useReducer } from 'react'
import appReducer, { initialState } from '../reducer/appReducer'

const AppContext = createContext(null)

export function AppProvider({children}){
  const [state, dispatch] = useReducer(appReducer, initialState)
  const value = { state, dispatch }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext(){
  const ctx = useContext(AppContext)
  if(!ctx) throw new Error('useAppContext must be used inside AppProvider')
  return ctx
}

export default AppContext
