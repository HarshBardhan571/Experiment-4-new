export default function CardComponent({title, children, footer}){
  return (
    <article className="card">
      <h3>{title}</h3>
      <div className="cardBody">{children}</div>
      {footer && <div className="cardFooter">{footer}</div>}
    </article>
  )
}
