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

  if (!weather) return null;

  const currentHourIndex = weather.hourly.time.findIndex(
    (time) => new Date(time) > new Date(),
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

  return (
    <div className="h-auto min-h-[500px] rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
      <p className="text-center text-2xl font-bold sm:text-3xl">
        Weather Highlights
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiHumidity className="text-5xl" />
          <p>Humidity</p>
          <p className="font-bold">{weather.current.relative_humidity_2m}%</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiBarometer className="text-5xl" />
          <p>Pressure</p>
          <p className="font-bold">{weather.current.pressure_msl} hPa</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiStrongWind className="text-5xl" />
          <p>Wind Speed</p>
          <p className="font-bold">{weather.current.wind_speed_10m} km/h</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiDirectionUp className="text-5xl" />
          <p>Direction</p>
          <p className="font-bold">{weather.current.wind_direction_10m}°</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiFog className="text-5xl" />
          <p>Visibility</p>
          <p className="font-bold">{(visibility / 1000).toFixed(1)} km</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiCloud className="text-5xl" />
          <p>Cloud Cover</p>
          <p className="font-bold">{cloudCover}%</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiSunrise className="text-5xl" />
          <p>Sunrise</p>
          <p className="font-bold">{sunrise}</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiSunset className="text-5xl" />
          <p>Sunset</p>
          <p className="font-bold">{sunset}</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiThermometer className="text-5xl" />
          <p>Feels Like</p>
          <p className="font-bold">
            {Math.round(weather.current.apparent_temperature)}°C
          </p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiRaindrop className="text-5xl" />
          <p>Rain</p>
          <p className="font-bold">{precipitation} mm</p>
        </div>

        <div className="flex flex-col items-center rounded-xl bg-white/5 p-4">
          <WiWindy className="text-5xl" />
          <p>Wind Gust</p>
          <p className="font-bold">{windGust} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Weatherhighlight;
