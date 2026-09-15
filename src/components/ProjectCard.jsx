export function ProjectCard({ project }) {
  const { title, description, technologies, status, links } = project

  return (
    <article className="project-card">
      <div className="project-card__header">
        <p className="project-card__status">{status}</p>
        <h2>{title}</h2>
      </div>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__technologies" aria-label={`${title} technologies`}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {(links.github || links.demo) && (
        <div className="project-card__links">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}
