import { TypeAnimation } from "react-type-animation";
import Button from "../Common/Button";
import SocialLinks from "./SocialLinks";
import { heroData } from "../data/heroData";

export default function HeroContent() {
  return (
    <div className="profile">
      <h3 className="hero-sub-title">
        I am {heroData.name}
      </h3>

      <span className="hero-title">
        I'm{" "}
        <TypeAnimation
          sequence={heroData.roles.flatMap(role => [role, 2000])}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="hero-title"
        />
      </span>

      <h3 className="hero-dsc-title mb-10">
        {heroData.description}
      </h3>

      <div className="row gy-4 text-center align-items-center">
        <div className="col-sm-5">
          <Button
            text="Download CV"
            href={heroData.resume}
            download
            className="px-5 py-3"
          />
        </div>

        <div className="col-sm-5">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}