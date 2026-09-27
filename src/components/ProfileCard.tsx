import { useState } from 'react'

type ContactLink = {
  id: string
  label: string
  href: string
}

type ProfileCardProps = {
  name: string
  role: string
  bio: string
  avatarUrl: string
  links: ContactLink[]
}

function ProfileCard({ name, role, bio, avatarUrl, links }: ProfileCardProps) {
  const [liked, setLiked] = useState(false)

  // Only one visitor on the page, so the count is 1 when liked and 0 otherwise
  const likes = liked ? 1 : 0

  return (
    <article id="about" className={liked ? 'card liked' : 'card'}>
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

      <nav className="card__links" aria-label="Contacts">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="like-row">
        <button
          type="button"
          className={liked ? 'like-btn active' : 'like-btn'}
          aria-pressed={liked}
          onClick={() => setLiked(!liked)}
        >
          {liked ? '♥ Liked' : '♡ Like'}
        </button>
        <p className="like-count">
          {likes} {likes === 1 ? 'like' : 'likes'}
        </p>
      </div>
    </article>
  )
}

export default ProfileCard
