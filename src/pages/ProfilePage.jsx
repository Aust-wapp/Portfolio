import { Link } from 'react-router'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { SkillGroup } from '../components/SkillGroup.jsx'
import { profile } from '../data/profile.js'

export function ProfilePage() {
  return (
    <div className="profile-page">
      <section className="profile-hero" aria-labelledby="profile-title">
        <p className="profile-hero__eyebrow">{profile.role}</p>
        <h1 id="profile-title">Hi, I&apos;m {profile.name}.</h1>
        <p className="profile-hero__summary">{profile.introduction}</p>
        <div className="profile-actions">
          <Link className="button button--primary" to="/projects">
            View my projects
          </Link>
          <Link className="button button--secondary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="profile-section" aria-labelledby="about-title">
        <SectionHeading
          eyebrow="A little about me"
          title="Building with curiosity and purpose."
          id="about-title"
        />
        <p className="profile-section__text">{profile.about}</p>
      </section>

      <section className="profile-section" aria-labelledby="skills-title">
        <SectionHeading
          eyebrow="Current focus"
          title="Technologies and areas I am working with."
          id="skills-title"
        />
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} skills={group.skills} />
          ))}
        </div>
      </section>

      <section className="profile-cta" aria-labelledby="profile-cta-title">
        <SectionHeading eyebrow="Keep exploring" title="See what I am building." id="profile-cta-title" />
        <p>Project details and contact information will be added as this portfolio grows.</p>
        <div className="profile-actions">
          <Link className="button button--primary" to="/projects">
            Explore projects
          </Link>
          <Link className="button button--secondary" to="/contact">
            Contact me
          </Link>
        </div>
      </section>
    </div>
  )
}
