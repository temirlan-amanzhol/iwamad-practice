type SkillItemProps = {
  name: string
}

function SkillItem({ name }: SkillItemProps) {
  return <li>{name}</li>
}

export default SkillItem
