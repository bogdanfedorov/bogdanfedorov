type SkillCardProps = {
    title: string;
    skills: string[];
    delay: number;
}

const SkillCard = ({ title, skills, delay }: SkillCardProps) => (
    <div className="skill-card" data-aos="fade-up" data-aos-delay={delay}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );

export default SkillCard;