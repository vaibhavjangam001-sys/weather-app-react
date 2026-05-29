import Storm from "../weatherAnimation/Storm";

const CurrentWeather = () => {
  return (
    <>
      {/* Card 1 */}
      <div className="flex h-[450px] flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h1 className="text-2xl sm:text-3xl font-bold">San Francisco</h1>

        <p className="mt-1 text-sm italic text-gray-300">
          Wed, 30 May 2018 • 12 PM EEST
        </p>

        <p className="mt-3 text-lg font-semibold text-sky-300">Thunderstorm</p>

        <div className="my-4 flex justify-center">
          <Storm />
        </div>

        <h2 className="sm:text-5xl  text-3xl font-bold">27°C</h2>

        <p className="mt-2 text-gray-300">Feels like 25°C</p>
      </div>
    </>
  );
};

export default CurrentWeather;
