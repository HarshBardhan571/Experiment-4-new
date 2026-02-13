import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const t = localStorage.getItem('token')
    if (!t) {
      router.push('/login')
    } else {
      setUser(t)
    }
  }, [])

  if (!user) return <p>Redirecting to login...</p>

  return (
    <section>
      <h2>Dashboard (Protected)</h2>
      <p>Welcome, {user} — this is protected content.</p>
    </section>
  )
}
