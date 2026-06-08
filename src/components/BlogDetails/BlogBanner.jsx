import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function BlogBanner({ title }) {
  return (
    <section className="back-home py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <Link
            to="/"
            className="text-decoration-none blog-all"
          >
            <span className="text-white">
              HOME
            </span>
          </Link>

          <span className="text-white">
            /
          </span>

          <HashLink
            smooth
            to="/#blog"
            className="text-decoration-none blog-all"
          >
            <span className="text-white">
              BLOG
            </span>
          </HashLink>

        </div>
        <div className="title-portfolio-blog text-center">

          <h1 className="fs-1 text-white">
            {title}
          </h1>

        </div>

      </div>
    </section>
  );
}