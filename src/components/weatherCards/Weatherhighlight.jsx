import {
  WiHumidity, // Humidity
  WiBarometer, // Pressure
  WiStrongWind, // Wind Speed
  WiDirectionUp, // Wind Direction
  WiFog, // Visibility
  WiCloud, // Cloud Cover
  WiSunrise, // Sunrise
  WiSunset, // Sunset
  WiMoonWaxingCrescent3, // Moon Phase
  WiWindy, // Wind Gust
  WiThermometer, // Temperature
  WiRaindrop,
  WiMoonWaningCrescent3, // Rain Chance
} from "react-icons/wi";

const Weatherhighlight = () => {
  return (
    <>
      {/* Weather highlight Card */}
      <div className="h-auto min-h-[500px] rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
        <p className="text-center text-2xl font-bold sm:text-3xl">
          Weather Highlights
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiHumidity className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Humidity</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiBarometer className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Pressure</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiStrongWind className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Wind Speed</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiDirectionUp className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Direction</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiFog className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Visibility</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiCloud className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Clouds</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiSunrise className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Sunrise</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiSunset className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Sunset</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiMoonWaningCrescent3 className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Moon Phase</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiThermometer className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Temperature</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiRaindrop className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Rain</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
            <WiWindy className="text-4xl sm:text-5xl" />
            <p className="mt-2 text-sm sm:text-base">Wind Gust</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weatherhighlight;
