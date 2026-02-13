import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const [user, setUser] = useState('')
  const router = useRouter()

  function submit(e) {
    e.preventDefault()
    // set a simple token
    localStorage.setItem('token', user || 'user')
    router.push('/dashboard')
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={submit} className="loginForm">
        <input placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} />
        <button className="primary" type="submit">Login</button>
      </form>
    </section>
  )
}
