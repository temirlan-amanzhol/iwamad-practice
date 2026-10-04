import SkillItem from '../components/SkillItem.tsx'
import type { Skill } from '../types.ts'

type SkillsProps = {
  skills: Skill[]
}

function Skills({ skills }: SkillsProps) {
  return (
    <section className="card">
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <ul className="skills">
          {skills.map((skill) => (
            <SkillItem key={skill.id} id={skill.id} name={skill.name} />
          ))}
        </ul>
      ) : (
        <p className="empty-state">No skills added yet.</p>
      )}
    </section>
  )
}

export default Skills
