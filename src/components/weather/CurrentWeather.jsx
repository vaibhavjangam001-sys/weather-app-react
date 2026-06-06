import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getWeatherAnimation } from "../../utils/weatherAnimationHelper";
import { getWeatherCondition } from "../../utils/getWeatherCondition";

const CurrentWeather = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  const isDark = useSelector(
    (state) => state.authenticationReducer.preferences?.theme === "dark"
  );

  const currentDate = useMemo(
    () =>
      new Date().toLocaleString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      }),
    []
  );

  if (!weather?.current) return null;

  return (
    <div
      className={`flex min-h-[450px] flex-col items-center rounded-xl border p-6 shadow-sm transition-all duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <h1 className="text-2xl font-bold sm:text-3xl">
        {weather.city}
      </h1>

      <p className={`mt-1 text-sm italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        {currentDate}
      </p>

      <p className="mt-3 text-lg font-semibold text-sky-600">
        {getWeatherCondition(weather.current.weather_code)}
      </p>

      <div className="my-4 flex justify-center">
        {getWeatherAnimation(weather.current.weather_code)}
      </div>

      <h2 className="text-3xl font-bold sm:text-5xl">
        {Math.round(weather.current.temperature_2m)}°C
      </h2>

      <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        Feels like {Math.round(weather.current.apparent_temperature)}°C
      </p>
    </div>
  );
};

export default CurrentWeather;