import Projects from '../Projects'
import { useEffect, useState } from 'react'

export default function ProjectsWrapper(){
  const [products, setProducts] = useState([])
  useEffect(() => { fetch('/api/products').then(r=>r.json()).then(d=>setProducts(d||[])) }, [])
  return <Projects products={products} />
}
