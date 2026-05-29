import Storm from "../weatherAnimation/Storm";

const CurrentWeather = () => {
  return (
    <>
      <div className="flex min-h-[350px] flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <h1 className="text-3xl font-bold">San Francisco</h1>

        <p className="mt-1 text-sm italic text-gray-300">
          Wed, 30 May 2018 • 12 PM EEST
        </p>

        <p className="mt-3 text-lg font-semibold text-sky-300">Thunderstorm</p>

        <div className="my-4 flex justify-center">
          <Storm />
        </div>

        <h2 className="text-5xl font-bold">27°C</h2>

        <p className="mt-2 text-gray-300">Feels like 25°C</p>
      </div>

      {/* Card 2 */}
      <div className="min-h-[350px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"></div>

      {/* Card 3 */}
      <div className="min-h-[350px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"></div>

      {/* Card 4 */}
      <div className="min-h-[350px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"></div>
    </>
  );
};

export default CurrentWeather;
