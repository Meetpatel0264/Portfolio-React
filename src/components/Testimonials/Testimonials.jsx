import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSlider from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <section
      className="bg-black py-100"
      id="testimonials"
    >
      <div className="container">

        <TestimonialsHeader />

        <TestimonialsSlider />

      </div>
    </section>
  );
}