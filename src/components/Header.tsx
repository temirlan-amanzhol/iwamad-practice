import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext.tsx'
import type { NavItem } from '../types.ts'

type HeaderProps = {
  title: string
  links: NavItem[]
}

function Header({ title, links }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <p className="site-header__title">{title}</p>
      <nav className="site-nav" aria-label="Main">
        {links.map((link) => (
          // end: "/" should be active only on the home page, not on every page
          <NavLink key={link.id} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <p className="header-likes">♥ {likes}</p>
    </header>
  )
}

export default Header
