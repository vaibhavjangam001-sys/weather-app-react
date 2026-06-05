import LottieModule from "lottie-react";
import cloudyAnimation from "../../assets/cloudy.json";

const Lottie = LottieModule.default;

const Cloudy = () => {
  return (
    <div className="h-48 w-48">
      <Lottie animationData={cloudyAnimation} loop={true} />
    </div>
  );
};

export default Cloudy;
