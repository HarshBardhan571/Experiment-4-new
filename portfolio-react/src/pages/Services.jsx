export default function Services(){
  const list = [
    {id:1,title:'Web Development',desc:'React apps, responsive UIs, and single-page apps.'},
    {id:2,title:'Data Science',desc:'Data analysis, simple ML experiments, and visualization.'},
    {id:3,title:'Consulting',desc:'Project planning and small feature builds.'}
  ]
  return (
    <div>
      <h1>My Services</h1>
      <p>I provide data-driven and intelligent solutions to help businesses and individuals make smarter decisions.</p>
      <div className="service-cards">
        <div className="service-card orange">
          <h3>Data Analysis & Visualization</h3>
          <p>Perform exploratory data analysis and create meaningful dashboards using Python, Pandas, and visualization tools.</p>
        </div>
        <div className="service-card cyan">
          <h3>Machine Learning Development</h3>
          <p>Build predictive models, classification systems, and AI-based solutions tailored to business requirements.</p>
        </div>
        <div className="service-card teal">
          <h3>AI Web Integration</h3>
          <p>Integrate machine learning models into modern React-based web applications for real-world deployment.</p>
        </div>
      </div>
    </div>
  )
}
