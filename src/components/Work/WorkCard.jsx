export default function WorkCard({
  image,
  title,
  description,
  link,
}) {
  return (
    <div className="col-lg-4 col-sm-6">

      <div className="work-main-box h-100">

        <div className="work-main-box-img position-relative">

          <img
            src={image}
            alt={title}
            className="img-fluid"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
            }}
          />

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute work-span"
          >
            <div>
              <p className="work-span-title">
                {title}
              </p>

              <p className="work-span-dsc">
                {description}
              </p>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
}