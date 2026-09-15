export function PublicPage({ title }) {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <p className="page-placeholder__eyebrow">Public portfolio</p>
      <h1 id="page-title">{title}</h1>
      <p>This page will be built in a later phase.</p>
    </section>
  )
}
