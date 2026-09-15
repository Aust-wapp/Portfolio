export function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
