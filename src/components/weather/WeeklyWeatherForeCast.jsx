import { useSelector } from "react-redux";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

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

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    return <WiRain className="text-4xl" />;
  }

  if ([95, 96, 99].includes(code)) {
    return <WiThunderstorm className="text-4xl" />;
  }

  return <WiCloud className="text-4xl" />;
};

const WeeklyWeatherForeCast = () => {
  const { weather } = useSelector((state) => state.weatherReducer);

  const isDark = useSelector(
    (state) =>
      state.authenticationReducer.preferences?.theme === "dark",
  );

  if (!weather) return null;

  return (
    <div
      className={`rounded-xl border p-6 shadow-sm transition-all duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
        7-Day Forecast
      </h2>

      <div className="space-y-3">
        {weather.daily.time.map((day, index) => (
          <div
            key={day}
            className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-200 ${
              isDark
                ? "border-slate-700 bg-slate-900 hover:bg-slate-700"
                : "border-slate-200 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-4">
              {getWeatherIcon(weather.daily.weather_code[index])}

              <span className="text-lg font-medium">
                {index === 0
                  ? "Today"
                  : new Date(day).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-lg font-bold">
                {Math.round(weather.daily.temperature_2m_max[index])}°
              </span>

              <span
                className={
                  isDark ? "text-slate-400" : "text-slate-500"
                }
              >
                {Math.round(weather.daily.temperature_2m_min[index])}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeatherForeCast;