import { getWeatherAnimation } from "../../utils/weatherAnimationHelper";
import { useSelector } from "react-redux";

const ForeCastWeather = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  if (!weather) return null;

  const currentHourIndex = weather.hourly.time.findIndex(
    (time) => new Date(time) > new Date(),
  );

  const forecastHours = weather.hourly.time.slice(
    currentHourIndex,
    currentHourIndex + 12,
  );

  return (
    <div className="h-[450px] rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
      <p className="text-center text-2xl font-bold sm:text-3xl">
        Hourly Weather Forecast
      </p>

      <div className="flex h-full items-center gap-4 overflow-x-auto hide-scrollbar">
        {forecastHours.map((time, index) => {
          const actualIndex = currentHourIndex + index;

          return (
            <div
              key={time}
              className="flex h-[70%] min-w-[220px] flex-col items-center rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
            >
              <h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
                {new Date(time).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h1>

              <div className="flex flex-1 items-center justify-center">
                {getWeatherAnimation(weather.hourly.weather_code[actualIndex])}
              </div>

              <p className="text-3xl font-bold">
                {Math.round(weather.hourly.temperature_2m[actualIndex])}
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
