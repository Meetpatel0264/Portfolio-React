import BlogPoint from "./BlogPoint";

export default function BlogSection({
  heading,
  points,
  index,
}) {
  return (
    <>
      <div className="text-start">

        <h3 className="fs-3">
          {index + 1}. {heading}
        </h3>

        {points.map((point, i) => (
          <BlogPoint
            key={i}
            point={point}
          />
        ))}

      </div>

      <hr />
    </>
  );
}