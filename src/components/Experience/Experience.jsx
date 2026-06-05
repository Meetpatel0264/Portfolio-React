import ExperienceSection from "./ExperienceSection";
import { experienceData } from "../data/experienceData";

export default function Experience() {
  return (
    <section className="bg-black py-100" id="resume">

      <div className="container">

        <div className="row gy-4">

          <div className="col-md-6">

            <ExperienceSection
              title={experienceData.experience.title}
              icon={experienceData.experience.icon}
              items={experienceData.experience.items}
            />

          </div>

          <div className="col-md-6">

            <ExperienceSection
              title={experienceData.education.title}
              icon={experienceData.education.icon}
              items={experienceData.education.items}
            />

          </div>

        </div>

      </div>

    </section>
  );
}