import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // Return sample notes from data/notes.json
  try {
    const file = path.join(process.cwd(), 'data', 'notes.json')
    const raw = fs.readFileSync(file, 'utf8')
    const notes = JSON.parse(raw)
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json([])
  }
}
