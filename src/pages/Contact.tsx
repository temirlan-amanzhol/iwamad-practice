import type { ContactLink } from '../types.ts'
import Card from '../components/ui/Card.tsx'

type ContactProps = {
  email: string
  links: ContactLink[]
}

function Contact({ email, links }: ContactProps) {
  return (
    <Card>
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Contact
