import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function ServiceList() {
  return (
    <div className="my-services mb-4 rounded-3">

      <h2 className="pb-4">
        All Services
      </h2>

      {servicesData.map((service) => (
        <Link
          key={service.id}
          to={`/service/${service.slug}`}
          className="text-decoration-none"
        >
          <span className="icons-for-services rounded-4 align-items-center d-flex mb-3">

            <h5 className="mb-0">
              {service.title}
            </h5>

            <i className="ri-arrow-right-s-line ms-auto"></i>

          </span>
        </Link>
      ))}
    </div>
  );
}