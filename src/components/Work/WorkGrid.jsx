import WorkCard from "./WorkCard";

export default function WorkGrid({
  projects,
}) {
  return (
    <div className="row g-4">

      {projects.map((project) => (
        <WorkCard
          key={project.id}
          {...project}
        />
      ))}

    </div>
  );
}