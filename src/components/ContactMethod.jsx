export function ContactMethod({ label, value, href, description }) {
  return (
    <li className="contact-method">
      <h3>{label}</h3>
      {href ? (
        <a className="contact-method__value" href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <p className="contact-method__value contact-method__value--placeholder">{value}</p>
      )}
      <p className="contact-method__description">{description}</p>
    </li>
  )
}
