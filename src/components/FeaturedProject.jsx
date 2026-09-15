import { Link } from 'react-router'
import { ProjectPreview } from './ProjectPreview.jsx'

export function FeaturedProject({ project }) {
  return (
    <article className={'featured-project'}>
      <ProjectPreview title={project.title} image={project.image} featured />
      <div className={'featured-project__content'}>
        <p className={'project-eyebrow'}>Featured project</p>
        <div className={'featured-project__title-row'}>
          <h2>{project.title}</h2>
          {project.status && <span className={'project-status'}>{project.status}</span>}
        </div>
        <p className={'featured-project__description'}>{project.description || project.shortDescription}</p>
        {project.technologies.length > 0 && (
          <ul className={'technology-list'} aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        <div className={'project-actions'}>
          <Link className={'project-action project-action--primary'} to={`/projects#${project.id}`}>View project</Link>
          {project.links.github && <a className={'project-action'} href={project.links.github} target={'_blank'} rel={'noreferrer'}>GitHub</a>}
          {project.links.demo && <a className={'project-action'} href={project.links.demo} target={'_blank'} rel={'noreferrer'}>Live demo</a>}
        </div>
      </div>
    </article>
  )
}
