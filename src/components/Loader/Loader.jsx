import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        className="loader-animation"
      />
    </div>
  );
}