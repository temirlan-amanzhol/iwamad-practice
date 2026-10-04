export type Skill = {
  id: string
  name: string
}

// A page inside the app (used with NavLink)
export type NavItem = {
  id: string
  label: string
  to: string
}

// An external link: email, GitHub, Instagram
export type ContactLink = {
  id: string
  label: string
  href: string
}
