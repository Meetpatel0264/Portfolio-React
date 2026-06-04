import { useState } from "react";
import WorkHeader from "./WorkHeader";
import WorkFilter from "./WorkFilter";
import WorkGrid from "./WorkGrid";
import { projectsData } from "../data/projectsData";

export default function Work() {
  const [filter, setFilter] = useState("*");

  const filteredProjects =
    filter === "*"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === filter
        );

  return (
    <section
      className="bg-gradiant px-2"
      id="work"
    >
      <div className="container py-100">

        <WorkHeader />

        <WorkFilter
          filter={filter}
          setFilter={setFilter}
        />

        <WorkGrid
          projects={filteredProjects}
        />

      </div>
    </section>
  );
}