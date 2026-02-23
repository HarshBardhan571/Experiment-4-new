export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Harsh Bardhan Singh</div>
      <div className="socials">
        <a href="https://github.com/HarshBardhan571" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:harsh@example.com">Email</a>
      </div>
    </footer>
  )
}
