import { NavLink } from 'react-router'
import Tag from './ui/Tag.tsx'

type SkillBadgeProps = {
  id: string
  name: string
}

function SkillBadge({ id, name }: SkillBadgeProps) {
  return (
    <li>
      <NavLink className="skill-badge" to={`/skills/${id}`}>
        <Tag>{name}</Tag>
      </NavLink>
    </li>
  )
}

export default SkillBadge
