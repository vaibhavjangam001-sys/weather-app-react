import { getWeatherAnimation } from "../../utils/weatherAnimationHelper";
import { useSelector } from "react-redux";

const ForeCastWeather = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  const isDark = useSelector(
    (state) =>
      state.authenticationReducer.preferences?.theme === "dark",
  );

  if (!weather) return null;

  const currentHourIndex = Math.max(
    0,
    weather.hourly.time.findIndex(
      (time) => new Date(time) > new Date(),
    ),
  );

  const forecastHours = weather.hourly.time.slice(
    currentHourIndex,
    currentHourIndex + 12,
  );

  return (
    <div
      className={`h-[450px] rounded-xl border p-4 shadow-sm transition-all duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <p className="text-center text-2xl font-bold sm:text-3xl">
        Hourly Weather Forecast
      </p>

      <div className="flex h-full items-center gap-4 overflow-x-auto px-2 hide-scrollbar">
        {forecastHours.map((time, index) => {
          const actualIndex = currentHourIndex + index;

          return (
            <div
              key={time}
              className={`flex h-[70%] min-w-[220px] flex-col items-center rounded-xl border p-4 transition-all duration-300 ${
                isDark
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
                {new Date(time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h1>

              <div className="flex flex-1 items-center justify-center">
                {getWeatherAnimation(
                  weather.hourly.weather_code[actualIndex],
                )}
              </div>

              <p className="text-3xl font-bold">
                {Math.round(
                  weather.hourly.temperature_2m[actualIndex],
                )}
                °C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForeCastWeather;