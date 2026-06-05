import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiDirectionUp,
  WiFog,
  WiCloud,
  WiSunrise,
  WiSunset,
  WiThermometer,
  WiRaindrop,
  WiWindy,
} from "react-icons/wi";
import { useSelector } from "react-redux";

const Weatherhighlight = () => {
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

  const visibility = weather.hourly.visibility?.[currentHourIndex] || 0;
  const cloudCover = weather.hourly.cloud_cover?.[currentHourIndex] || 0;
  const precipitation = weather.hourly.precipitation?.[currentHourIndex] || 0;
  const windGust = weather.hourly.wind_gusts_10m?.[currentHourIndex] || 0;

  const sunrise = new Date(weather.daily.sunrise[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.daily.sunset[0]).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const cardClass = `flex flex-col items-center rounded-xl border p-4 transition-all duration-300 ${
    isDark
      ? "border-slate-700 bg-slate-900"
      : "border-slate-200 bg-slate-50"
  }`;

  return (
    <div
      className={`min-h-[500px] rounded-xl border p-4 shadow-sm transition-all duration-300 sm:p-6 ${
        isDark
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <p className="text-center text-2xl font-bold sm:text-3xl">
        Weather Highlights
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className={cardClass}>
          <WiHumidity className="text-5xl" />
          <p>Humidity</p>
          <p className="font-bold">{weather.current.relative_humidity_2m}%</p>
        </div>

        <div className={cardClass}>
          <WiBarometer className="text-5xl" />
          <p>Pressure</p>
          <p className="font-bold">{weather.current.pressure_msl} hPa</p>
        </div>

        <div className={cardClass}>
          <WiStrongWind className="text-5xl" />
          <p>Wind Speed</p>
          <p className="font-bold">{weather.current.wind_speed_10m} km/h</p>
        </div>

        <div className={cardClass}>
          <WiDirectionUp className="text-5xl" />
          <p>Direction</p>
          <p className="font-bold">{weather.current.wind_direction_10m}°</p>
        </div>

        <div className={cardClass}>
          <WiFog className="text-5xl" />
          <p>Visibility</p>
          <p className="font-bold">{(visibility / 1000).toFixed(1)} km</p>
        </div>

        <div className={cardClass}>
          <WiCloud className="text-5xl" />
          <p>Cloud Cover</p>
          <p className="font-bold">{cloudCover}%</p>
        </div>

        <div className={cardClass}>
          <WiSunrise className="text-5xl" />
          <p>Sunrise</p>
          <p className="font-bold">{sunrise}</p>
        </div>

        <div className={cardClass}>
          <WiSunset className="text-5xl" />
          <p>Sunset</p>
          <p className="font-bold">{sunset}</p>
        </div>

        <div className={cardClass}>
          <WiThermometer className="text-5xl" />
          <p>Feels Like</p>
          <p className="font-bold">
            {Math.round(weather.current.apparent_temperature)}°C
          </p>
        </div>

        <div className={cardClass}>
          <WiRaindrop className="text-5xl" />
          <p>Rain</p>
          <p className="font-bold">{precipitation} mm</p>
        </div>

        <div className={cardClass}>
          <WiWindy className="text-5xl" />
          <p>Wind Gust</p>
          <p className="font-bold">{windGust} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Weatherhighlight;