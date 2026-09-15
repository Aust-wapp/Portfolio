import { ContactMethod } from '../components/ContactMethod.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { contact } from '../data/contact.js'

export function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <SectionHeading
          eyebrow="Get in touch"
          title="Interested in connecting?"
          id="contact-title"
        />
        <p>{contact.introduction}</p>
      </section>

      <section aria-labelledby="contact-methods-title">
        <SectionHeading eyebrow="Public links" title="Where to find me." id="contact-methods-title" />
        <ul className="contact-methods">
          {contact.methods.map((method) => (
            <ContactMethod key={method.label} {...method} />
          ))}
        </ul>
      </section>
    </div>
  )
}
