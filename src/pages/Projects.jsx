import CardComponent from '../components/CardComponent'
import HeroSection from '../components/HeroSection'
import Link from 'next/link'

export default function Projects({products=[]}){
  return (
    <main>
      <HeroSection title="Projects / Products" subtitle="List of demo products (projects)" />
      <section style={{marginTop:16}}>
        <div className="productGrid">
          {products.length ? products.map(p => (
            <CardComponent key={p.id} title={p.name} footer={<Link href={`/products/${p.id}`} className="btn">View</Link>}>
              <p className="muted">${p.price?.toFixed(2)}</p>
              <p>{p.desc}</p>
            </CardComponent>
          )) : (
            <p>Loading products...</p>
          )}
        </div>
      </section>
    </main>
  )
}
