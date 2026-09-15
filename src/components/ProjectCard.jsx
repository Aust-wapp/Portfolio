import { Link } from 'react-router'
import { ProjectPreview } from './ProjectPreview.jsx'

export function ProjectCard({ project, variant = 'listing', showPreview = false }) {
  return (
    <article className={`project-card project-card--${variant}`} id={project.id}>
      {showPreview && <ProjectPreview title={project.title} image={project.image} />}
      <div className={'project-card__content'}>
        <div className={'project-card__header'}>
          <h2>{project.title}</h2>
          {project.status && <span className={'project-status'}>{project.status}</span>}
        </div>
        <p className={'project-card__description'}>{project.shortDescription}</p>
        {project.technologies.length > 0 && (
          <ul className={'project-card__technologies'} aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        <div className={'project-card__links'}>
          <Link to={`/projects#${project.id}`}>View project</Link>
          {project.links.github && <a href={project.links.github} target={'_blank'} rel={'noreferrer'}>GitHub</a>}
          {project.links.demo && <a href={project.links.demo} target={'_blank'} rel={'noreferrer'}>Live demo</a>}
        </div>
      </div>
    </article>
  )
}
