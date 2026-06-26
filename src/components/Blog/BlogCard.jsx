import { Link } from "react-router-dom";

export default function BlogCard({
  title,
  category,
  image,
  link,
}) {
  return (
    <div className="col-lg-4 col-md-6">

      <div className="blog position-relative">

        <Link
          to={link}
          className="text-decoration-none"
        >

          <img
            src={image}
            alt={title}
            className="rounded-4 images img-fluid"
            width="100%"
          />

          <span className="blog-box-head rounded-pill position-absolute">
            {category}
          </span>

          <span className="blog-box-title position-absolute">

            <div className="blog-bottom-box">

              <h2 className="blog-bottom-box-title">
                {title}
              </h2>

            </div>

          </span>

        </Link>

      </div>

    </div>
  );
}