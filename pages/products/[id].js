import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch('/api/products').then((r) => r.json()).then((d) => {
      const found = d.find((x) => String(x.id) === String(id))
      if (found) setProduct(found)
    })
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <section>
      <h2>{product.name}</h2>
      <p className="muted">Price: ${product.price.toFixed(2)}</p>
      <p>{product.desc}</p>
    </section>
  )
}
