import LottieModule from "lottie-react";
import sunnyAnimation from "../../assets/sunny.json";

const Lottie = LottieModule.default;

const Sunny = () => {
  return (
    <div className="h-48 w-48">
      <Lottie animationData={sunnyAnimation} loop={true} />
    </div>
  );
};

export default Sunny;
