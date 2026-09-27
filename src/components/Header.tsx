type NavLink = {
  id: string
  label: string
  href: string
}

type HeaderProps = {
  title: string
  links: NavLink[]
}

function Header({ title, links }: HeaderProps) {
  return (
    <header className="site-header">
      <p className="site-header__title">{title}</p>
      <nav className="site-nav" aria-label="Main">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
