import { useEffect, useState } from 'react'

export default function Home() {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    // Load initial notes from API then merge with localStorage
    fetch('/api/notes')
      .then((r) => r.json())
      .then((data) => {
        const stored = JSON.parse(localStorage.getItem('notes') || 'null')
        if (stored && Array.isArray(stored)) {
          setNotes(stored)
        } else {
          setNotes(data || [])
        }
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function addNote() {
    if (!text.trim()) return
    setNotes((s) => [{ id: Date.now(), text: text.trim() }, ...s])
    setText('')
  }

  function removeNote(id) {
    setNotes((s) => s.filter((n) => n.id !== id))
  }

  return (
    <main className="container">
      <h1>Experiment 3 — Notes App</h1>
      <div className="card">
        <div className="inputRow">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a note..."
          />
          <button onClick={addNote}>Add</button>
        </div>

        <ul className="notes">
          {notes.map((n) => (
            <li key={n.id} className="note">
              <span>{n.text}</span>
              <button className="del" onClick={() => removeNote(n.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <small>Notes persist in browser localStorage. API provides sample data.</small>
      </footer>
    </main>
  )
}
