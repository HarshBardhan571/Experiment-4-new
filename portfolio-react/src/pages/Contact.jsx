import { useState } from 'react'

export default function Contact(){
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  function submit(e){e.preventDefault(); alert('Thanks, '+(name||'friend'))}
  return (
    <div>
      <h2>Contact</h2>
      <p className="muted">Want to work together or ask about a project? Send a message.</p>
      <form className="contactForm" onSubmit={submit} style={{maxWidth:600}}>
        <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Your email" />
        <textarea placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} />
        <div style={{display:'flex',gap:8}}>
          <button className="primary">Send</button>
          <button type="button" className="secondary" onClick={()=>{setName('');setMsg('')}}>Clear</button>
        </div>
      </form>
    </div>
  )
}
