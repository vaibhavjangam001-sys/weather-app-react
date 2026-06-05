import loadingAnimation from "../../assets/loading.json";
import LottieModule from "lottie-react";

const Loading = () => {
  const Lottie = LottieModule.default;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-96 w-96">
        <Lottie animationData={loadingAnimation} loop />
      </div>
    </div>
  );
};

export default Loading;