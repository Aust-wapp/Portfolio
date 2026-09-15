import { SectionHeading } from '../components/SectionHeading.jsx'
import { aboutSections } from '../data/about.js'

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-intro" aria-labelledby="about-page-title">
        <SectionHeading
          eyebrow="My journey"
          title="Learning, building, and moving toward AI development."
          id="about-page-title"
        />
        <p>
          This page shares the direction behind my current work and the skills I am continuing to develop.
        </p>
      </section>

      <div className="about-sections">
        {aboutSections.map(({ id, eyebrow, title, text }) => (
          <section className="about-section" key={id} aria-labelledby={`${id}-title`}>
            <SectionHeading eyebrow={eyebrow} title={title} id={`${id}-title`} />
            <p className="about-section__text">{text}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
