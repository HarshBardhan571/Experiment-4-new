import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const file = path.join(process.cwd(), 'data', 'products.json')
    const raw = fs.readFileSync(file, 'utf8')
    const products = JSON.parse(raw)
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json([])
  }
}
