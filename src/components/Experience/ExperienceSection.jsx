import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  title,
  icon,
  items,
}) {
  return (
    <div className="Experience">

      <div className="top-box">

        <h2 className="Experience-title">

          <i className={`${icon} Experience-title-icon`}></i>

          {title}

        </h2>

      </div>

      {items.map((item, index) => (
        <ExperienceCard
          key={index}
          {...item}
        />
      ))}

    </div>
  );
}