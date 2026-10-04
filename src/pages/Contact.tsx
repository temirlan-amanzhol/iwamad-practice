import type { ContactLink } from '../types.ts'

type ContactProps = {
  email: string
  links: ContactLink[]
}

function Contact({ email, links }: ContactProps) {
  return (
    <section className="card">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <ul className="skills">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
