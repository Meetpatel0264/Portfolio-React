import SkillCard from "./SkillCard";
import { skillsData } from "../data/skillsData";

export default function SkillsGrid() {
  return (
    <div className="row justify-content-center">

      {skillsData.map((skill) => (
        <SkillCard
          key={skill.id}
          {...skill}
        />
      ))}

    </div>
  );
}