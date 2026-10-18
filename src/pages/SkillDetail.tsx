import { NavLink, useParams } from 'react-router'
import type { Skill } from '../types.ts'
import Card from '../components/ui/Card.tsx'

type SkillDetailProps = {
  skills: Skill[]
}

function SkillDetail({ skills }: SkillDetailProps) {
  const { id } = useParams()
  const index = skills.findIndex((skill) => skill.id === id)

  if (index === -1) {
    return (
      <Card>
        <h2>Skill not found</h2>
        <p>There is no skill with id "{id}".</p>
        <p className="back-link">
          <NavLink to="/skills">← Back to skills</NavLink>
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <h2>{skills[index].name}</h2>
      <p>
        Skill {index + 1} of {skills.length}
      </p>
      <p className="back-link">
        <NavLink to="/skills">← Back to skills</NavLink>
      </p>
    </Card>
  )
}

export default SkillDetail
