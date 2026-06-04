import { heroData } from "../data/heroData";

export default function HeroImage() {
  return (
    <div className="profile-img pointer text-center">
      <img
        src={heroData.image}
        alt="Meet Patel"
        className="img-fluid img-main"
        width="90%"
      />
    </div>
  );
}