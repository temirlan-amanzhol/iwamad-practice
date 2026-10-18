import SkillBadge from '../components/SkillBadge.tsx'
import type { Skill } from '../types.ts'
import Card from '../components/ui/Card.tsx'

type SkillsProps = {
  skills: Skill[]
}

function Skills({ skills }: SkillsProps) {
  return (
    <Card>
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <ul className="skill-list">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} id={skill.id} name={skill.name} />
          ))}
        </ul>
      ) : (
        <p className="empty-state">No skills added yet.</p>
      )}
    </Card>
  )
}

export default Skills
