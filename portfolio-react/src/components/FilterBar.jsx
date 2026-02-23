import React, { useState, useMemo, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'

export default function FilterBar({ items = [], onChange }){
  const { state } = useAppContext()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if(!q) return items
    return items.filter(it => (it.title || '').toLowerCase().includes(q) || (it.tech || '').toLowerCase().includes(q))
  }, [items, query])

  useEffect(()=>{
    if(typeof onChange === 'function') onChange(filtered)
  }, [filtered, onChange])

  return (
    <div className="filterBar">
      <input
        aria-label="Search projects"
        placeholder="Search projects or tech..."
        value={query}
        onChange={e=>setQuery(e.target.value)}
      />
      <div className="filterMeta">Results: {filtered.length} · Theme: {state.theme}</div>
    </div>
  )
}
