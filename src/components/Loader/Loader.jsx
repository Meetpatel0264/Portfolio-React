import Lottie from "lottie-react";
import loaderAnimation from "../../../public/assets/loader.json";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{
          width: 250,
          height: 250,
        }}
      />
    </div>
  );
}