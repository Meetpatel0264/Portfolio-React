export default function TestimonialCard({
  review,
  image,
  name,
}) {
  return (
    <div className="testimonial-card text-center">

      <div className="testimonials-content">
        "{review}"
      </div>

      <div className="testimonials-img">
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className="testimonials-client-name">
        {name}
      </div>

    </div>
  );
}