import { Link } from "react-router-dom";

export default function ServiceCard({
  id,
  title,
  description,
  slug,
}) {
  return (
    <div className="col-12 hover-box m-0">
      <Link
        to={`/service/${slug}`}
        className="text-decoration-none"
      >
        <div className="row align-items-center py-sm-3">

          <div className="col-md-4">
            <div className="service-rows d-flex align-items-center text-center">
              <h3 className="me-3 mb-0">
                {id}
              </h3>

              <h4 className="mb-0">
                {title}
              </h4>
            </div>
          </div>

          <div className="col-md-6">
            <div className="service-content text-start pe-md-5 pt-3 pb-3">
              <p className="mb-0">
                {description}
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="text-center transform-rotate">
              <i className="ri-arrow-right-down-line service-text-icon"></i>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
}