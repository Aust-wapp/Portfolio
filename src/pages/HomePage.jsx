import { Link } from 'react-router'
import { FeaturedProject } from '../components/FeaturedProject.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const featuredProject = projects.find((project) => project.featured)
const activeProjects = projects.filter((project) => project.current && !project.featured)
const selectedProjects = projects.filter((project) => !project.current)

export function HomePage() {
  return (
    <div className={'home-page'}>
      <section className={'home-section'} aria-labelledby={'currently-building'}>
        <h1 className={'home-section__title'} id={'currently-building'}>Currently building</h1>
        {featuredProject && <FeaturedProject project={featuredProject} />}
        <div className={'active-project-grid'}>
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant={'active'} showPreview />
          ))}
        </div>
      </section>

      <section className={'home-section home-section--selected'} aria-labelledby={'selected-projects'}>
        <div className={'home-section__heading'}>
          <div>
            <p className={'section-eyebrow'}>More from my work</p>
            <h2 id={'selected-projects'}>Selected projects</h2>
          </div>
          <Link className={'all-projects-link'} to={'/projects'}>View all projects</Link>
        </div>
        <div className={'selected-project-grid'}>
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant={'selected'} />
          ))}
        </div>
      </section>
    </div>
  )
}
