import { useState } from 'react'

export default function Contact(){
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  function submit(e){e.preventDefault(); alert('Thanks, '+(name||'friend'))}
  return (
    <div>
      <h2>Contact</h2>
      <form className="contactForm" onSubmit={submit}>
        <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
        <textarea placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} />
        <button className="primary">Send</button>
      </form>
    </div>
  )
}
