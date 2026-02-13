export default function CardComponent({title, children, footer}){
  return (
    <article className="productCard">
      <h3>{title}</h3>
      <div>{children}</div>
      {footer && <div className="cardActions">{footer}</div>}
    </article>
  )
}
