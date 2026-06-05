export default function ExperienceCard({
  year,
  title,
  institute,
}) {
  return (
    <div className="bottom-box">

      <h3 className="Experience-bottom-box-sub-title">
        {year}
      </h3>

      <h2 className="Experience-bottom-box-title">
        {title}
      </h2>

      <p className="Experience-bottom-box-dsc">
        {institute}
      </p>

    </div>
  );
}