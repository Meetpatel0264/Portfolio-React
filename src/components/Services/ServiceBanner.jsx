import { Link } from "react-router-dom";

export default function ServiceBanner({ title }) {
  return (
    <section className="section-top">
      <div className="container">
        <div className="align-items-center d-flex flex-column">
          <h1>{title}</h1>

          <ul className="gap-2 justify-content-center align-items-center list-unstyled d-flex">
            <li>
              <Link
                to="/"
                className="text-decoration-none text-white"
              >
                Home
              </Link>
            </li>

            <li>
              <i className="ri-arrow-right-s-line"></i>
            </li>

            <li>
              <Link
                to="/#services"
                className="text-decoration-none text-white"
              >
                Services
              </Link>
            </li>

            <li>
              <i className="ri-arrow-right-s-line"></i>
            </li>

            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}