import { NavLink } from 'react-router'

type SkillItemProps = {
  id: string
  name: string
}

function SkillItem({ id, name }: SkillItemProps) {
  return (
    <li>
      <NavLink to={`/skills/${id}`}>{name}</NavLink>
    </li>
  )
}

export default SkillItem
