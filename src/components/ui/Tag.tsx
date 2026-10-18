import type { ReactNode } from 'react'
import './Tag.css'

type TagProps = {
  children: ReactNode
}

function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>
}

export default Tag
