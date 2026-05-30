import { useSelector } from "react-redux";
import { getWeatherAnimation } from "../../utils/weatherAnimationHelper";
import { getWeatherCondition } from "../../utils/getWeatherCondition";

const CurrentWeather = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  if (!weather) {
    return null;
  }


  const currentDate = new Date().toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  console.log(weather);

  return (
    <>
      {/* Card 1 */}
      <div className="flex h-[450px] flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h1 className="text-2xl sm:text-3xl font-bold">{weather.city}</h1>

        <p className="mt-1 text-sm italic text-gray-300">{currentDate}</p>

        <p className="mt-3 text-lg font-semibold text-sky-300">
          {getWeatherCondition(weather.current.weather_code)}
        </p>

        <div className="my-4 flex justify-center">
          {getWeatherAnimation(weather.current.weather_code)}
        </div>

        <h2 className="sm:text-5xl  text-3xl font-bold">
          {" "}
          {Math.round(weather.current.temperature_2m)}°C
        </h2>

        <p className="mt-2 text-gray-300">
          Feels like {Math.round(weather.current.apparent_temperature)}°C
        </p>
      </div>
    </>
  );
};

export default CurrentWeather;
