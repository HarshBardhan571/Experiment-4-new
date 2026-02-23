export default function About(){
  return (
    <div>
      <h1>About Me</h1>
      <p>I am an aspiring Data Scientist passionate about Artificial Intelligence and Machine Learning. I specialize in transforming raw data into meaningful insights and building intelligent systems that solve real-world problems.</p>

      <h2 style={{marginTop:24}}>What I Provide</h2>
      <div className="service-cards">
        <div className="service-card orange">
          <h3>Data Analysis</h3>
          <p>Extract meaningful insights from complex datasets using Python, Pandas and visualization tools.</p>
        </div>
        <div className="service-card cyan">
          <h3>Machine Learning Solutions</h3>
          <p>Develop predictive models and intelligent systems to solve business and real-world challenges.</p>
        </div>
        <div className="service-card teal">
          <h3>Web + AI Integration</h3>
          <p>Build modern web applications using React and integrate AI models into practical systems.</p>
        </div>
      </div>

      <h2 style={{marginTop:24}}>Core Skills</h2>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:10}}>
        <span className="pill blue">Python</span>
        <span className="pill purple">Machine Learning</span>
        <span className="pill green">Data Science</span>
        <span className="pill blue">React JS</span>
        <span className="pill purple">SQL</span>
      </div>
    </div>
  )
}
