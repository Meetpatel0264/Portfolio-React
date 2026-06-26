import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Stats from "./Stats";

export default function Hero() {
  return (

    <section
      className="bg-gradiant py-100 hero-section"
      id="resume"
    >
      <div className="container hero-content">
        <div className="row row-gap-5">
          <div className="col-lg-6">
            <HeroContent />
          </div>

          <div className="col-lg-6 text-center">
            <HeroImage />
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}