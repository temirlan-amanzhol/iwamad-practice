import type { ReactNode } from 'react'
import './Card.css'

type CardProps = {
  children: ReactNode
  // article for a self-contained thing (profile), section for a part of a page
  as?: 'article' | 'section'
  highlighted?: boolean
}

function Card({ children, as = 'section', highlighted = false }: CardProps) {
  const Element = as

  return (
    <Element className={highlighted ? 'card card--highlighted' : 'card'}>
      {children}
    </Element>
  )
}

export default Card
