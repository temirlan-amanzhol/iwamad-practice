import { useLikes } from '../context/LikesContext.tsx'
import LikeButton from './LikeButton.tsx'
import Card from './ui/Card.tsx'
import type { ContactLink } from '../types.ts'

type ProfileCardProps = {
  name: string
  role: string
  bio: string
  avatarUrl: string
  links: ContactLink[]
}

function ProfileCard({ name, role, bio, avatarUrl, links }: ProfileCardProps) {
  const { likes } = useLikes()

  return (
    <Card as="article" highlighted={likes > 0}>
      <div className="profile">
        <img
          className="profile__avatar"
          src={avatarUrl}
          alt={`Profile photo of ${name}`}
          width="104"
          height="104"
        />
        <div>
          <h1 className="profile__name">{name}</h1>
          <p className="profile__role">{role}</p>
          <p className="profile__bio">{bio}</p>
        </div>
      </div>

      {/* External links stay as <a>; NavLink is only for pages inside the app */}
      <nav className="profile__links" aria-label="Contacts">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="profile__actions">
        <LikeButton />
      </div>
    </Card>
  )
}

export default ProfileCard
