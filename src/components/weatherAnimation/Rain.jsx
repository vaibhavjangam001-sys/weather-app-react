import LottieModule from "lottie-react";
import rainAnimation from "../../assets/rain.json";

const Lottie = LottieModule.default;

const Rain = () => {
  return (
    <div className="h-48 w-48">
      <Lottie
        animationData={rainAnimation}
        loop={true}
      />
    </div>
  );
};

export default Rain;