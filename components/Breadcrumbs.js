import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Breadcrumbs() {
  const router = useRouter()
  const asPath = router.asPath.split('?')[0]
  const parts = asPath.split('/').filter(Boolean)

  if (parts.length === 0) return null

  const crumbs = parts.map((part, idx) => {
    const href = '/' + parts.slice(0, idx + 1).join('/')
    const label = decodeURIComponent(part)
    return { href, label }
  })

  return (
    <nav className="breadcrumbs">
      <Link href="/">Home</Link>
      {crumbs.map((c, i) => (
        <span key={c.href}>
          <span className="sep">/</span>
          <Link href={c.href}>{c.label}</Link>
        </span>
      ))}
    </nav>
  )
}
