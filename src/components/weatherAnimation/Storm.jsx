import LottieModule from "lottie-react";
import stormAnimation from "../../assets/storm.json";

const Lottie = LottieModule.default;

const Storm = () => {
  return (
    <div className="h-48 w-48">
      <Lottie animationData={stormAnimation} loop={true} />
    </div>
  );
};

export default Storm;
