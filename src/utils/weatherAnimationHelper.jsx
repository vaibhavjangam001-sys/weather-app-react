import Sunny from "../components/animation/Sunny";
import Cloudy from "../components/animation/Cloudy";
import Rain from "../components/animation/Rain";
import Storm from "../components/animation/Storm";

export const getWeatherAnimation = (code) => {
  if (code === 0) {
    return <Sunny />;
  }

  if ([1, 2, 3, 45, 48].includes(code)) {
    return <Cloudy />;
  }

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    return <Rain />;
  }

  if ([95, 96, 99].includes(code)) {
    return <Storm />;
  }

  return <Cloudy />;
};
