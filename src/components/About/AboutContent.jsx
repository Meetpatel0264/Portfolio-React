import { aboutData } from "../data/aboutData";
import ContactInfo from "./ContactInfo";

export default function AboutContent() {
  return (
    <>
      <div className="text-white text-center text-md-start">

        <p className="position-relative dot-container">

          <span className="dot">
            <i className="ri-circle-fill"></i>
          </span>

          {aboutData.subtitle}

        </p>

        <h2 className="mb-4">
          {aboutData.title}{" "}
          <span style={{ color: "#8750f7" }}>
            {aboutData.name}
          </span>
        </h2>

        <p className="fs-5 lh-base">
          {aboutData.description}
        </p>

        <p className="lead fw-semibold lh-base">
          "{aboutData.quote}"
        </p>

      </div>

      <div className="mt-5">
        <ContactInfo />
      </div>
    </>
  );
}