import { ProjectCard } from '../components/ProjectCard.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { projects } from '../data/projects.js'

export function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-intro" aria-labelledby="projects-title">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have worked on or am actively developing."
          id="projects-title"
        />
        <p>
          This collection will grow as project details, technologies, and links are added.
        </p>
      </section>

      <section aria-label="Project list">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
