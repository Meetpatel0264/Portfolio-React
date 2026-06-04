export default function ServiceContent({
  title,
  image,
  description,
  content = [],
  process = [],
}) {
  return (
    <>
      <img
        src={image}
        alt={title}
        width="100%"
      />

      <h2 className="my-4">
        {title}
      </h2>

      <p>{description}</p>

      {content.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
        </p>
      ))}

      <h2 className="my-4">
        Service Process
      </h2>

      <div className="row gy-3">

        {process.map((item, index) => (
          <div
            key={index}
            className="col-md-6"
          >
            <div className="d-flex align-items-center">
              <i className="ri-check-fill pe-3 correct-icon"></i>

              <p className="m-0">
                {item}
              </p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}