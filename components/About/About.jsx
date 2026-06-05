import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      className="about-us bg-black py-100"
      id="about"
      data-aos="fade-down"
    >
      <div className="container">

        <div className="row">

          <div className="col-md-6">
            <AboutImage />
          </div>

          <div className="col-md-6">
            <AboutContent />
          </div>

        </div>

      </div>
    </section>
  );
}