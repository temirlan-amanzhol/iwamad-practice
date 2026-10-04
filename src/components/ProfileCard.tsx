import { useLikes } from '../context/LikesContext.tsx'
import LikeButton from './LikeButton.tsx'
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
    <article id="about" className={likes > 0 ? 'card liked' : 'card'}>
      <div className="card__top">
        <img
          className="avatar"
          src={avatarUrl}
          alt={`Profile photo of ${name}`}
          width="104"
          height="104"
        />
        <div>
          <h1 className="card__name">{name}</h1>
          <p className="card__role">{role}</p>
          <p className="card__bio">{bio}</p>
        </div>
      </div>

      {/* External links stay as <a>; NavLink is only for pages inside the app */}
      <nav className="card__links" aria-label="Contacts">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="like-row">
        <LikeButton />
      </div>
    </article>
  )
}

export default ProfileCard
