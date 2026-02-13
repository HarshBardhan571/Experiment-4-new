import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/products').then((r) => r.json()).then((d) => setItems(d || []))
  }, [])

  return (
    <section>
      <h2>Products</h2>
      <div className="productGrid">
        {items.map((p) => (
          <article key={p.id} className="productCard">
            <h3>{p.name}</h3>
            <p className="muted">${p.price.toFixed(2)}</p>
            <p>{p.desc}</p>
            <div className="cardActions">
              <Link href={`/products/${p.id}`} className="btn">View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
