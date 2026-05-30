import { useSelector } from "react-redux";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const WeeklyWeatherForeCast = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  if (!weather) return null;

  const getWeatherIcon = (code) => {
    if (code === 0) {
      return <WiDaySunny className="text-4xl" />;
    }

    if ([1, 2, 3].includes(code)) {
      return <WiCloud className="text-4xl" />;
    }

    if ([45, 48].includes(code)) {
      return <WiFog className="text-4xl" />;
    }

    if (
      [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)
    ) {
      return <WiRain className="text-4xl" />;
    }

    if ([95, 96, 99].includes(code)) {
      return <WiThunderstorm className="text-4xl" />;
    }

    return <WiCloud className="text-4xl" />;
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
        7-Day Forecast
      </h2>

      <div className="space-y-3">
        {weather.daily.time.map((day, index) => (
          <div
            key={day}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-all duration-200 hover:bg-white/15"
          >
            <div className="flex items-center gap-4">
              {getWeatherIcon(
                weather.daily.weather_code[index]
              )}

              <span className="font-medium text-lg">
                {index === 0
                  ? "Today"
                  : new Date(day).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-lg">
                {Math.round(
                  weather.daily.temperature_2m_max[index]
                )}
                °
              </span>

              <span className="text-gray-400">
                {Math.round(
                  weather.daily.temperature_2m_min[index]
                )}
                °
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeatherForeCast;