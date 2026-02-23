import { useState } from 'react'

export default function Contact(){
  const [name,setName]=useState('')
  const [msg,setMsg]=useState('')
  function submit(e){e.preventDefault(); alert('Thanks, '+(name||'friend'))}
  return (
    <div>
      <h1>Contact Me</h1>
      <p className="muted">Let's connect and build intelligent solutions together.</p>

      <div className="contact-grid">
        <div className="info-card">
          <h3>Harsh Bardhan Singh</h3>
          <p>🎓 B.Tech in Computer Science</p>
          <p>💼 Aspiring Data Scientist</p>
          <p>📍 Your City</p>
          <p>✉️ harsh@example.com</p>
          <p>📞 +91 0000000000</p>
        </div>

        <div className="contact-panel">
          <h3>Send a Message</h3>
          <form className="contactForm" onSubmit={submit}>
            <label>Name</label>
            <input placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input placeholder="Enter your email" />
            <label>Message</label>
            <textarea placeholder="Write your message..." value={msg} onChange={(e)=>setMsg(e.target.value)} />
            <div style={{marginTop:10}}>
              <button className="primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
