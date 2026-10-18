import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext.tsx'
import logo from '../assets/logo.svg'
import type { NavItem } from '../types.ts'

type HeaderProps = {
  title: string
  links: NavItem[]
}

function Header({ title, links }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <NavLink className="site-header__brand" to="/">
        {/* Empty alt: the title next to the logo already says what the link is */}
        <img src={logo} alt="" width="32" height="32" />
        <span>{title}</span>
      </NavLink>

      <nav className="site-nav" aria-label="Main">
        {links.map((link) => (
          // end: "/" should be active only on the home page, not on every page
          <NavLink key={link.id} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <p className="header-likes">
        <span aria-hidden="true">♥</span> {likes}
        <span className="visually-hidden"> likes</span>
      </p>
    </header>
  )
}

export default Header
