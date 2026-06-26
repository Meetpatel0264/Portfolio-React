import SkillsHeader from "./SkillsHeader";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      className="bg-gradiant py-100"
      id="skills"
    >
      <div className="container">

        <SkillsHeader />

        <SkillsGrid />

      </div>
    </section>
  );
}