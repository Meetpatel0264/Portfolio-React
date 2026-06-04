import { aboutData } from "../data/aboutData";

export default function AboutImage() {
  return (
    <div className="about-us-img overflow-hidden position-relative">
      <figure className="text-center p-2">

        <img
          src={aboutData.image}
          alt="About"
          className="img-fluid drop-shadow"
        />

      </figure>
    </div>
  );
}