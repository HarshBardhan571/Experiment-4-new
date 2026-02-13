import { useEffect, useState, useMemo } from 'react'

function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000)
  if (diff < 60) return `${diff}s ago`
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

export default function Home() {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    fetch('/api/notes')
      .then((r) => r.json())
      .then((data) => {
        const stored = JSON.parse(localStorage.getItem('notes') || 'null')
        const initial = (stored && Array.isArray(stored)) ? stored : (data || [])
        // normalize timestamps
        const normalized = initial.map((n) => ({
          id: n.id || Date.now() + Math.random(),
          text: n.text || '',
          ts: n.ts || Date.now()
        }))
        setNotes(normalized.reverse())
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  function addNote() {
    const v = text.trim()
    if (!v) return setToast('Enter some text')
    const newNote = { id: Date.now(), text: v, ts: Date.now() }
    setNotes((s) => [newNote, ...s])
    setText('')
    setToast('Note added')
  }

  function removeNote(id) {
    setNotes((s) => s.filter((n) => n.id !== id))
    setToast('Note deleted')
  }

  function clearAll() {
    setNotes([])
    setToast('All notes cleared')
  }

  function startEdit(n) {
    setEditingId(n.id)
    setEditingText(n.text)
  }

  function saveEdit(id) {
    setNotes((s) => s.map((n) => (n.id === id ? { ...n, text: editingText } : n)))
    setEditingId(null)
    setEditingText('')
    setToast('Note updated')
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return notes
    return notes.filter((n) => n.text.toLowerCase().includes(q))
  }, [notes, query])

  return (
    <main className="container">
      <header className="hero">
        <h1>Experiment 3 — Colorful Notes</h1>
        <p className="subtitle">Add, edit, search and persist your quick notes</p>
      </header>

      <div className="card">
        <div className="controls">
          <div className="inputRow">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a note..."
              aria-label="New note"
            />
            <button className="primary" onClick={addNote}>Add</button>
          </div>

          <div className="toolRow">
            <input className="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes..." />
            <div className="meta">
              <span className="count">{notes.length} notes</span>
              <button className="ghost" onClick={clearAll}>Clear All</button>
            </div>
          </div>
        </div>

        <ul className="notes">
          {filtered.map((n) => (
            <li key={n.id} className="note">
              <div className="noteLeft">
                <div className="badge" aria-hidden></div>
                {editingId === n.id ? (
                  <input className="editInput" value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                ) : (
                  <span className="noteText">{n.text}</span>
                )}
              </div>

              <div className="noteRight">
                <small className="ts">{timeAgo(n.ts)}</small>
                {editingId === n.id ? (
                  <>
                    <button className="save" onClick={() => saveEdit(n.id)}>Save</button>
                    <button className="cancel" onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit" onClick={() => startEdit(n)}>Edit</button>
                    <button className="del" onClick={() => removeNote(n.id)}>Delete</button>
                  </>
                )}
              </div>
            </li>
          ))}
          {filtered.length === 0 && <li className="empty">No notes found</li>}
        </ul>
      </div>

      <footer>
        <small>Notes persist in browser localStorage. API provides sample data.</small>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </main>
  )
}
