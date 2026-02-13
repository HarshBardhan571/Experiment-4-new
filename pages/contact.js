import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Contact() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const router = useRouter()

  function submit(e) {
    e.preventDefault()
    // programmatic navigation after submit
    router.push('/?submitted=1')
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={submit} className="contactForm">
        <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button type="submit" className="primary">Send</button>
      </form>
    </section>
  )
}
