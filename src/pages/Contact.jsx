import HeroSection from '../components/HeroSection'
import { useState } from 'react'

export default function Contact(){
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  function submit(e){e.preventDefault(); alert('Message sent'); setName(''); setMsg('')}
  return (
    <main>
      <HeroSection title="Contact" subtitle="Get in touch" />
      <form className="contactForm" onSubmit={submit} style={{marginTop:16}}>
        <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
        <textarea placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} />
        <button className="primary" type="submit">Send</button>
      </form>
    </main>
  )
}
