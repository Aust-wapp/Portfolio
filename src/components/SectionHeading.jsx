export function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
