export default function SectionTitle({
  title,
  description,
}) {
  return (
    <div className="text-center d-flex flex-column mb-4 justify-content-center align-items-center">
      <h2 className="service-heading">
        {title}
      </h2>

      <p className="form-contect">
        {description}
      </p>
    </div>
  );
}